"""Akamai-aware fetching with an on-disk cache.

hellenicparliament.gr sits behind Akamai, which fingerprints the TLS/HTTP2
layer — a spoofed User-Agent on plain `requests`/`curl` returns 403. We therefore
try, in order:
  1. curl_cffi impersonating Chrome (matches Chrome's JA3/HTTP2 fingerprint),
  2. Playwright headless (a real browser — also renders JS / ASP.NET postbacks).

Everything is cached to disk so re-parsing never re-hits the site.
"""
from __future__ import annotations

import hashlib
import os
import random
import time

from . import config

CACHE_DIR = os.environ.get("VOULI_CACHE", "cache")


def _cache_path(url: str) -> str:
    h = hashlib.sha1(url.encode("utf-8")).hexdigest()[:16]
    return os.path.join(CACHE_DIR, f"{h}.html")


def _polite_sleep() -> None:
    time.sleep(config.RATE_LIMIT_SECONDS + random.uniform(0, config.RATE_LIMIT_JITTER))


def _proxies() -> dict | None:
    return {"https": config.EGRESS_PROXY, "http": config.EGRESS_PROXY} \
        if config.EGRESS_PROXY else None


def _fetch_curl_cffi(url: str) -> str | None:
    try:
        from curl_cffi import requests as creq  # type: ignore
    except Exception:
        return None
    try:
        sess = creq.Session(impersonate="chrome")
        r = sess.get(url, headers={"Accept-Language": "el-GR,el;q=0.9,en;q=0.6"},
                     proxies=_proxies(), timeout=config.REQUEST_TIMEOUT)
        if r.status_code == 200 and r.text:
            return r.text
    except Exception:
        return None
    return None


def fetch_bytes(url: str, dest: str) -> bool:
    """Download a binary file (transcript) to dest. Proxy-aware. Returns ok."""
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return True
    try:
        from curl_cffi import requests as creq  # type: ignore
    except Exception:
        return False
    _polite_sleep()
    try:
        sess = creq.Session(impersonate="chrome")
        r = sess.get(url, proxies=_proxies(), timeout=config.REQUEST_TIMEOUT * 2)
        if r.status_code == 200 and r.content:
            os.makedirs(os.path.dirname(dest) or ".", exist_ok=True)
            with open(dest, "wb") as fh:
                fh.write(r.content)
            return True
    except Exception:
        return False
    return False


def _fetch_playwright(url: str) -> str | None:
    try:
        from playwright.sync_api import sync_playwright  # type: ignore
    except Exception:
        return None
    try:
        with sync_playwright() as p:
            launch = {"headless": True}
            if config.EGRESS_PROXY:
                launch["proxy"] = {"server": config.EGRESS_PROXY}
            br = p.chromium.launch(**launch)
            ctx = br.new_context(locale="el-GR", user_agent=config.USER_AGENT)
            page = ctx.new_page()
            page.goto(url, wait_until="networkidle", timeout=config.REQUEST_TIMEOUT * 1000)
            html = page.content()
            br.close()
            return html
    except Exception:
        return None


def fetch(url: str, use_cache: bool = True) -> str | None:
    """Return page HTML (or None). Caches on disk; respects the rate limit."""
    os.makedirs(CACHE_DIR, exist_ok=True)
    cp = _cache_path(url)
    if use_cache and os.path.exists(cp):
        with open(cp, encoding="utf-8") as fh:
            return fh.read()

    _polite_sleep()
    html = _fetch_curl_cffi(url) or _fetch_playwright(url)
    if html:
        with open(cp, "w", encoding="utf-8") as fh:
            fh.write(html)
    return html
