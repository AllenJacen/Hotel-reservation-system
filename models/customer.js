const db = require('../db');
// sequelizejs ,通过db.js间接地定义Model db.js
module.exports = db.defineModel('customers', {
    name: db.STRING(100),
    cardID:db.STRING(100),
    gender: db.BOOLEAN
});;