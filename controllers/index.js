// index:

// module.exports = {
//     'GET /': async (ctx, next) => {
//         ctx.render('index.html', {
//             title: 'Welcome'
//         });
//     }
// };
// const Sequelize = require('sequelize');
// const model = require("../model");
// console.log(model);
// let Book = model.Book;
// let Customer = model.Customer;
// let Room = model.Room;
// Room.hasOne(Book);
// Book.belongsTo(Room);
// Customer.hasOne(Room);
// Room.belongsTo(Customer);

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html');
    }
};