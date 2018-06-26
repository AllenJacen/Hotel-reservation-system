const db = require('../db');

module.exports = db.defineModel('manners', {
    email: {
        type: db.STRING(100),
        unique: true
    },
    passwd: db.STRING(100),
    level:TINYINT(10)
});