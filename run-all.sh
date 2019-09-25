#!/usr/bin/env bash

(cd root-html-file && npm start) &
(cd navbar && ng serve --port 4203 --publicHost http://localhost:4203 --disable-host-check) &
(cd app1 && ng serve --port 4201 --publicHost http://localhost:4201 --disable-host-check) &
(cd app2 && ng serve --port 4202 --publicHost http://localhost:4202 --disable-host-check) &
