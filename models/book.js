const db = require('../db');
// const customers = require('./customer');
// const rooms = require('./room');
// sequelizejs ,通过db.js间接地定义Model db.js
module.exports = db.defineModel('books', {
    customerId: db.INTEGER(100),
    roomId: db.INTEGER(100),
    roomnumber:db.INTEGER(100),
    deposit:db.INTEGER(100),
    duration:db.INTEGER(100)
},{
    timestamps: true
});
// 通过references特性将userId定义为外键，并通过field特性将其在数据库中的字段名指定为user_id。