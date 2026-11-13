#!/bin/sh
cd "$(dirname "$0")"
echo "Trinh chieu: http://localhost:8765/index.html"
echo "Giao vien: http://localhost:8765/presenter.html"
python3 -m http.server 8765
