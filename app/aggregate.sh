#!/usr/bin/env bash

OUTPUT_FILE="rom-app-aggregated.txt"

# Remove existing output file (if any)
rm -f "$OUTPUT_FILE"

# 1) Show a tree of the project, excluding certain directories/files
#    -I pattern uses '|' to separate multiple exclusions
echo "===== Tree of the project =====" >> "$OUTPUT_FILE"
tree -I "node_modules|build|.git|aggregate.sh|rom-app-aggregated.txt|package-lock.json|.next|.vercel" >> "$OUTPUT_FILE"
echo -e "\n" >> "$OUTPUT_FILE"

# 2) Find all files (not directories) excluding node_modules, build, .git, etc.
echo "===== Concatenated Files =====" >> "$OUTPUT_FILE"
FILES=$(find . -type f \
  -not -path "*/node_modules/*" \
  -not -path "*/build/*" \
  -not -path "*/.next/*" \
  -not -path "*/.vercel/*" \
  -not -path "*/.git/*" \
  -not -name "aggregate.sh" \
  -not -name "rom-app-aggregated.txt" \
  -not -name "package-lock.json")

for FILE in $FILES; do
  echo "===== $FILE =====" >> "$OUTPUT_FILE"
  cat "$FILE" >> "$OUTPUT_FILE"
  echo -e "\n" >> "$OUTPUT_FILE"
done

echo "Done! Created '$OUTPUT_FILE' with all relevant files."
