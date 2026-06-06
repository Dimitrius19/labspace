# Reproducible runner for the vouli-signal pipeline + ML tier.
# Run on a Greek-region host (or pass VOULI_PROXY) so the harvest can reach the
# geo-blocked parliament host.
#
#   docker build -t vouli-signal .
#   docker run --rm -e VOULI_PROXY=$VOULI_PROXY -e ANTHROPIC_API_KEY=$KEY \
#     -v "$PWD/data:/app/data" -v "$PWD/dashboard/data:/app/dashboard/data" \
#     vouli-signal ./run_full.sh 2021-01-01
FROM python:3.11-slim

# antiword/libreoffice optional for legacy .doc; wget for ParlaMint bulk.
RUN apt-get update && apt-get install -y --no-install-recommends \
      wget ca-certificates antiword && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt requirements-ml.txt ./
RUN pip install --no-cache-dir -r requirements.txt -r requirements-ml.txt

COPY . .
# Default to the lite ML tier; set VOULI_EMBED_MODEL at run-time for transformers.
ENV VOULI_OUT=out VOULI_DATA=data
CMD ["python", "-m", "vouli_signal.pipeline", "all"]
