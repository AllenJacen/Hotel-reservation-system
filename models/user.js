const db = require('../db');

module.exports = db.defineModel('users', {
    TcardID:db.INTEGER(100),
    roomId: db.INTEGER(100)
});