#!/bin/bash
git clone https://github.com/w0ng/googlefontdirectory.git

# Convert files
for i in "googlefontdirectory/fonts/*.ttf"
do
    ./convert.pe --format ".woff" $i
    ./convert.pe --format ".otf" $i
    ./convert.pe --format ".eot" $i
    ./convert.pe --format ".svg" $i
done