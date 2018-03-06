#/bin/bash

curl -H "Content-Type: application/json" -X $1 "http://localhost:9200/$2" $3
echo "\n"