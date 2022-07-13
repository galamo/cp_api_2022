#!/bin/bash

set -e
set -x


cmd="npm start"

until mysql -h "host.docker.internal:3306" -u root -p root shopping-app -e 'select 1'; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "Mysql is up - executing command"
exec $cmd