const db = require('../db');
// sequelizejs ,通过db.js间接地定义Model db.js
module.exports = db.defineModel('rooms', {
    roomId:db.STRING(100),
    name: db.STRING(100),
    price:db.INTEGER(100),
    free: db.BOOLEAN,
    level:db.INTEGER(50)
});