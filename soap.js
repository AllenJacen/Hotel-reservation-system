var soap = require('soap');
  // var url = 'http://192.168.1.106:1331/User?wsdl';
  // var args = { a: '浙江'};
  var url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl';
  var args = { byProvinceName: '浙江'};
  soap.createClient(url, function(err, client) {
    client.getSupportCity(args, function(err, result) {
      if (err) {
        console.log(err);
      }else {
        console.log(result);
      }  
    });
  });