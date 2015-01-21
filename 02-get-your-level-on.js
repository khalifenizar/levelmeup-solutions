const level = require('level');
const database_directory = process.argv[2];
const key = process.argv[3];

var db = level(database_directory);

db.get(key, function getKey (err, value) {
    if (err) {
        console.error(err);
        return;
    }

    console.log(value);
});
