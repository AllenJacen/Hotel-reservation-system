var soap = require('soap-server');
// var mydb = require("appdb");
// function MyTestService(){
//     console.log("www");
// }
function MyTestService(){
}
MyTestService.prototype.test2 = function(myArg1, myArg2){
	return myArg1 + myArg2;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());

var test2operation = soapService.getOperation('test2');
test2operation.setOutputType('number');
test2operation.setInputType('myArg1', {type: 'number'});
test2operation.setInputType('myArg2', {type: 'number'});

soapServer.listen(1337, '127.0.0.1');
// function User(username, password, id_card) {
//     console.log("123");
//     this.username = username;
//     this.password = password;
//     this.CardId = id_card;
//   }
//   User.prototype =  {
//     isCanLogin: function(a) {
//       console.log(a);
//     }
// }
// // MyTestService.prototype.mydb.getManager();
// // MyTestService.prototype.test1 = function(myArg1, myArg2){
// // 	return myArg1 + myArg2;
// // };

// var soapServer = new soap.SoapServer();
// var soapService = soapServer.addService('User', new User());
	
// soapServer.listen(1331, '192.168.1.106');
// var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

// soap.listen(server, {
//     // Server options.
//     path: '/wsdl',
//     services: myService,
//     xml: xml,

//     // WSDL options.
//     attributesKey: 'theAttrs',
//     valueKey: 'theVal',
//     xmlKey: 'theXml'
// });