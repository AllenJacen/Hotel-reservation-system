model-sequelize/
|
+- .vscode/
|  |
|  +- launch.json <-- VSCode 配置文件
|
+- controllers/ <-- Controller
|
+- views/ <-- html模板文件
|
+- static/ <-- 静态资源文件
|
+- controller.js <-- 扫描注册Controller
|
+- app.js <-- 使用koa的js -- 业务代码
|
+- models/ <-- 存放所有Model
|  |
|  +- Pet.js <-- Pet
|  |
|  +- User.js <-- User
|
+- config.js <-- 配置文件入口
|
+- config-default.js <-- 默认配置文件
|
+- config-test.js <-- 测试配置文件
|
+- db.js <-- 如何定义Model
|
+- model.js <-- 如何导入Model
|
+- init-db.js <-- 初始化数据库
|
+- package.json <-- 项目描述文件
|
+- node_modules/ <-- npm安装的所有依赖包