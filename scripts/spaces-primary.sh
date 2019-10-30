#!/usr/bin/env bash

PATH=/usr/local/bin/:$PATH

SPACES_IDS=$(yabai -m query --spaces | jq -r 'map(.index) | .[]')
SPACES_ARR="["
for index in $SPACES_IDS; do
  SPACES_ARR="$SPACES_ARR $(yabai -m query --spaces --space $index)," ;
done
SPACES_ARR=$(echo $SPACES_ARR | sed 's/,$//')
SPACES_ARR="$SPACES_ARR]"
SPACES=$(echo $SPACES_ARR | jq 'group_by(.display)')

echo $(cat <<-EOF
{
  "desktop": {
        "spaces": $SPACES
  }
}
EOF
)
