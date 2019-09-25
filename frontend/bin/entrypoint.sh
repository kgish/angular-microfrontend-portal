#!/bin/sh

sed -i "s/{FRONTEND_TITLE}/${FRONTEND_TITLE?UNKNOWN}/g" /usr/share/nginx/html/frontend/main.js
sed -i "s/{FRONTEND_DESCRIPTION}/${FRONTEND_DESCRIPTION?UNKNOWN}/g" /usr/share/nginx/html/frontend/main.js

exec "$@"
