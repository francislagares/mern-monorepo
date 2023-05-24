#!/bin/bash

set -e
set -u
# set -x	# Uncomment for debugging


# The replica set configuration document
#
# mongo0: Primary, since we initiate the replica set on monog0
# mongo1: Secondary
# mongo2: Arbiter, since we set the 'arbiterOnly' option to true
_config=\
'
{
	"_id": "rs0",
	"members": [
		{ "_id": 0, "host": "mongo0", "priority": 2 },
		{ "_id": 1, "host": "mongo1", "priority": 1 },
		{ "_id": 2, "host": "mongo2", arbiterOnly: true },
	]
}
'

sleep 5;


if [[ -n "${DB_USERNAME:-}" && -n "${DB_PASSWORD:-}" ]]; then
	mongosh --quiet \
	--host mongo0 \
	-u $DB_USERNAME -p $DB_PASSWORD \
	--authenticationDatabase admin \
	<<-EOF
		rs.initiate($_config, { force: true });
	EOF
else
	mongosh --quiet \
	--host mongo0 \
	<<-EOF
		rs.initiate($_config, { force: true });
	EOF
fi

exec "$@"