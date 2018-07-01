const db = require('../db');

module.exports = db.defineModel('managers', {
    email: {
        type: db.STRING(100),
        unique: true,
        comment:'登录账号'
    },
    passwd: db.STRING(100),
    level:db.INTEGER(10)
});