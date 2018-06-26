// var config = {
//     database: 'test', // 使用哪个数据库
//     username: 'www', // 用户名
//     password: 'www', // 口令
//     host: 'localhost', // 主机名
//     port: 3306 // 端口号，MySQL默认3306
// };

// module.exports = config;
const defaultConfig = './config-default.js';
// 可设定为绝对路径，如 /opt/product/config-override.js
const overrideConfig = './config-override.js';
const testConfig = './config-test.js';

const fs = require('fs');

var config = null;

if (process.env.NODE_ENV === 'test') {
    console.log(`Load ${testConfig}...`);
    config = require(testConfig);
} else {
    console.log(`Load ${defaultConfig}...`);
    config = require(defaultConfig);
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, require(overrideConfig));
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;
// 具体的规则是：

// 先读取config-default.js；
// 如果不是测试环境，就读取config-override.js，如果文件不存在，就忽略。
// 如果是测试环境，就读取config-test.js。
// 这样做的好处是，开发环境下，团队统一使用默认的配置，
// 并且无需config-override.js。部署到服务器时，
// 由运维团队配置好config-override.js，以覆盖config-override.js的默认设置。
// 测试环境下，本地和CI服务器统一使用config-test.js，测试数据库可以反复清空，不会影响开发。