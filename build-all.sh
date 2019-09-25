#!/usr/bin/env bash

for x in portal apps/app1 apps/app2
do
    echo
    echo '===' $x '==='
    echo

    (cd $x && npm install && ng build)
done
