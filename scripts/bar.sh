#!/usr/bin/env bash

PATH=/usr/local/bin/:$PATH

BG_COLOR=$([ -f "nibar/.colors/bg" ] && cat nibar/.colors/bg || echo "2e3440")

echo $(cat <<-EOF
{
  "colors": {
     "background": "$BG_COLOR"
  }
}
EOF
)
