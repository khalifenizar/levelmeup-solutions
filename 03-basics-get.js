const level = require('level')

const database_directory = process.argv[2];

var db = level(database_directory);
var hits = 0;

function get (i) {
    var key = 'key' + i;

    db.get(key, function getKey (err, value) {
        if (err) {
            if (err.type !== 'NotFoundError') {
                throw err;
            }
        } else {
            console.log(key + '=' + value);
            hits += 1;
        }

        if (hits < 10) {
            get(i + 1);
        }
    });
}

get(0);
