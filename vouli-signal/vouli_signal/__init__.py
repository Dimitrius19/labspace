"""vouli-signal — turn Greek parliamentary activity into govtech demand signals.

Pipeline: acquire (ParlaMint bulk + nightly tail scrape) -> normalise ->
classify (grievance + A/B + ministry) -> score (demand-signal index) -> digest.

Designed so the package imports on the stdlib alone; every heavy dependency
(curl_cffi, playwright, anthropic, pypdf, selectolax) is imported lazily inside
the function that needs it, and `pipeline all --demo` runs with zero deps/keys.
"""

__version__ = "0.1.0"
