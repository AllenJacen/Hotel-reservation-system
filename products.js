// store products as database:
const appdb =require("./appdb");
var id = 0;
var dataCus;
 let a = appdb.getManager();
a.then(function(data){
    console.log("dssdsd");
    dataCus = data ;
}).catch(function(err){
    console.log(err);
});
var room;
var removeRoom;
let dataRoom = appdb.getRoom();
        dataRoom.then(function(data){
            console.log("Room");
            console.log('data');
            room = data;
        }).catch(function(err){
            console.log(err);
        });
let dataremoveRoom = appdb.getremoveRoom();
dataremoveRoom.then(function(data){
    removeRoom = data;
}).catch(function(err){
    console.log(err);
});
function nextId() {
    id++;
    return 'p' + id;
}

function Product(name, manufacturer, price) {
    this.id = nextId();
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
}

var products = [
    new Product('iPhone 7', 'Apple', 6800),
    new Product('ThinkPad T440', 'Lenovo', 5999),
    new Product('LBP2900', 'Canon', 1099)
];

module.exports = {
    getdataCus: () => {
        return dataCus;
    },
    getRoom: () => {
        return room;
    },
    getremoveRoom: () => {
        return removeRoom;
    },
    getyudingRoom: () => {
        return yudingRoom;
    },
    getProduct: (id) => {
        var i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return products[i];
            }
        }
        return null;
    },

    addRoom: (name, manufacturer, price) => {
        
        return p;
    },

    deleteProduct: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove products[index]:
            return products.splice(index, 1)[0];
        }
        return null;
    }
};