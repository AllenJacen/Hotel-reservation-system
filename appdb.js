// 1）登录用户的基本信息，包括登录ID及密码、权限。
// 2）前台操作：包括开房登记、退房结账和房状态查看
// 3）预订管理：包括预订房间、预订入住和解除预订（要有webservice接口）
// 4）信息查询：包括在住客人列表、预订客人列表
// 5）报表统计：包括开房记录统计、退房结账和预订房间统计
const models = require('./model');

let
    Room = models.room,
    Customer = models.customer,
    Manager = models.manager,
    Book = models.book,
    Removeroom = models.user;

module.exports = {
    // 前台操作
    getManager :async () => {
        var manager = await Manager.findAll({
            where: {
                version:1
            }
        });
        // let Manager = model.manager;
            // var manager = await Manager.findAll(); 
    console.log("查找成功！");
    console.log(`find ${manager.length} managers:`);
    let data = [];
        for (let p of manager) {
            console.log(JSON.stringify(p.dataValues));
            data.push(p.dataValues)
        }
        return data;
    },
    getRoom :async () => {
        var room = await Room.findAll();
        // let Manager = model.manager;
            // var manager = await Manager.findAll(); 
    console.log("查找Room成功！");
    console.log(`find ${room.length} rooms:`);
    let data = [];
        for (let p of room) {
            console.log(JSON.stringify(p.dataValues));
            data.push(p.dataValues)
        }
        return data;
    },
    getremoveRoom:async () => {
        var removeroom = await Removeroom.findAll();
        // let Manager = model.manager;
            // var manager = await Manager.findAll(); 
    console.log("查找Removeroom成功！");
    console.log(`find ${removeroom.length} Removeroom:`);
    let data = [];
        for (let p of removeroom) {
            console.log(JSON.stringify(p.dataValues));
            data.push(p.dataValues)
        }
        return data;
    },
    addCustomer :async (Cname,cardID,gender) => {
        var customer = await Customer.create({
            name: Cname,
            cardID:cardID,
            gender: gender
        });
        console.log("添加顾客成功！");
        
    },
    addRoom :async (roomId,name,price,free,level) => {
        var room = await Room.create({
            roomId:roomId,
            name: name,
            price:price,
            free: free,
            level:level
        });
        console.log("添加房间成功！"); 
    },
    addRemoveroom :async (TcardID,roomId) => {
        var removeroom = await Removeroom.create({
            roomId:roomId,
            TcardID:TcardID
        });
        console.log("退房成功！"); 
    },
    addBook :async (customerId,roomId,roomnumber,deposit,duration) => {
        var book = await Book.create({
            customerId: customerId,
            roomId: roomId,
            roomnumber:roomnumber,
            deposit:deposit,
            duration:duration
        });
        console.log("添加订单成功！"); 
    },
    UpdataBook :async (a) => {
        var books = await Book.findAll({
            where: {
                id: '1'
            }
        });
        for (let p of books) {
        p.customerId= a.customerId;
        p.roomId=a.roomId,
        p.roomnumber=a.roomnumber,
        p.deposit=a.deposit,
        p.duration=a.duration,
        p.updatedAt = Date.now();
        p.version ++;
        await p.save();
        }
        console.log("更新订单成功！");

    },
    deleteBook :async (a) => {
        var books = await Book.findAll({
            where: {
                id: '1'
            }
        });
        console.log(`find ${pets.length} pets:`);
        for (let p of books) {
            if (p.version === 3) {
                await p.destroy();
                console.log(`${p.name} was destroyed.`);
            }
        }
        return null;
    }

}


// const Sequelize = require('sequelize');
// const config = require('./config');

// var sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 30000
//     }
// });
// // 定义模型Pet，告诉Sequelize如何映射数据库表,用sequelize.define()定义Model时，传入名称pet，默认的表名就是pets。第二个参数指定列名和数据类型，如果是主键，需要更详细地指定。第三个参数是额外的配置，我们传入{ timestamps: false }是为了关闭Sequelize的自动添加timestamp的功能。所有的ORM框架都有一种很不好的风气，总是自作聪明地加上所谓“自动化”的功能，但是会让人感到完全摸不着头脑。
// var Pet = sequelize.define('pet', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },
//     name: Sequelize.STRING(100),
//     gender: Sequelize.BOOLEAN,
//     birth: Sequelize.STRING(10),
//     createdAt: Sequelize.BIGINT,
//     updatedAt: Sequelize.BIGINT,
//     version: Sequelize.BIGINT
// }, {
//         timestamps: false
//     });

//     var now = Date.now();

//     //promise方式写数据的插入

//     // Pet.create({
//     //     id: 'g-' + now,
//     //     name: 'Gaffey',
//     //     gender: false,
//     //     birth: '2007-07-07',
//     //     createdAt: now,
//     //     updatedAt: now,
//     //     version: 0
//     // }).then(function (p) {
//     //     console.log('created.' + JSON.stringify(p));
//     // }).catch(function (err) {
//     //     console.log('failed: ' + err);
//     // });
    
// // 用await写：插入数据    
//     (async () => {
//         var dog = await Pet.create({
//             id: 'd-' + now,
//             name: 'Odie',
//             gender: false,
//             birth: '2008-08-08',
//             createdAt: now,
//             updatedAt: now,
//             version: 0
//         });
//         console.log();
//         console.log('created: ' + JSON.stringify(dog));
//     })();


//     //  // 查询数据,更新数据，删除数据
//     // (async () => {
//     //     var pets = await Pet.findAll({
//     //         where: {
//     //             name: 'Gaffey'
//     //         }
//     //     });
//     //     console.log(`find ${pets.length} pets:`);
//     //     for (let p of pets) {
//     //         console.log(JSON.stringify(p));
//     //         console.log('update pet...');
//     //         p.gender = true;
//     //         p.updatedAt = Date.now();
//     //         p.version ++;
//     //         await p.save();
//     //         if (p.version === 3) {
//     //             await p.destroy();
//     //             console.log(`${p.name} was destroyed.`);
//     //         }
//     //     }
//     // })();
    // 查询数据
    