const products = require('../products');
const appdb =require("../appdb");
const APIError = require('../rest').APIError;
// let
//     Pet = model.Pet,
//     User = model.User;

// var pet = await Pet.create({});
module.exports = {
    'GET /api/products/getManager': async (ctx, next) => {
        ctx.rest({
                customer: products.getdataCus()
            })
    }, 
    'GET /api/products/getRoom': async (ctx, next) => {
        ctx.rest({
            room: products.getRoom()
        });
    },
    'GET /api/products/getremoveRoom': async (ctx, next) => {
        ctx.rest({
            removeRoom: products.getremoveRoom()
        });
    },
    // Cname,cardID,gender
    'POST /api/addCustomer':async (ctx, next) => {
        let gender;
        if(ctx.request.body.gender == 1){
            gender = true;
        }else{
            gender = false;
        }
        var p = appdb.addCustomer(ctx.request.body.Cname, ctx.request.body.cardID,gender);
        ctx.rest(p);
    },
    'POST /api/addBook':async (ctx, next) => {
       console.log(ctx.request.body);
       var data=ctx.request.body;
       var customerId=parseInt(data.cardID.substring(1,0));
       var roomId= parseInt(data.roomnumber.substring(1,0));
       var gender;
       if(data.gender == 'male'){
           gender = true;
       }else{
           gender = false;
       };
       let roomName;
       if(data.roomnumber.substring(1,0) == '1'){
           roomName="豪华";
       }else{
           roomName='普通';
       }
       var p1=appdb.addBook(customerId,roomId,parseInt(data.roomnumber),parseInt(data.deposit),parseInt(data.duration));
        var p2 = appdb.addCustomer(data.name, data.cardID,gender);
        var p3 = appdb.addRoom(data.roomnumber,roomName,data.price,1,data.roomnumber.substring(1,0));
        ctx.rest(p1);
        ctx.rest(p2);
        ctx.rest(p3);
    },
    'POST /api/addRoom':async (ctx, next) => {
        // let free;
        // if(ctx.request.body.gender == 1){
        //     free = '在住';
        // }else{
        //     free = '空闲';
        // }
        var p = appdb.addRoom(ctx.request.body.roomId, ctx.request.body.name,ctx.request.body.price,ctx.request.body.free,ctx.request.body.level);
        ctx.rest(p);
    },
    'POST /api/addRemoveroom': async (ctx, next) => {
        console.log(ctx.request.body);
        var data = ctx.request.body;
        var p = appdb.addRemoveroom(parseInt(data.TcardID), parseInt(data.roomId));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    }
};
