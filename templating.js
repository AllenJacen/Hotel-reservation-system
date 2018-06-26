// //集成Nunjucks实际上也是编写一个middleware（中间件），
// 这个middleware的作用是给ctx对象绑定一个render(view, model)的方法，
// 这样，后面的Controller就可以调用这个方法来渲染模板了

const nunjucks = require('nunjucks');

// createEnv()函数和前面使用Nunjucks时编写的函数是一模一样的

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

// tempating()函数，它会返回一个middleware，在这个middleware中，我们只给ctx“安装”了一个render()函数，其他什么事情也没干，就继续调用下一个middleware。

function templating(path, opts) {
    var env = createEnv(path, opts);
    return async (ctx, next) => {
        ctx.render = function (view, model) {
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            ctx.response.type = 'text/html';
        };
        await next();
    };
}
// 使用的时候，我们在app.js添加如下代码：

// const isProduction = process.env.NODE_ENV === 'production';

// app.use(templating('views', {
//     noCache: !isProduction,
//     watch: !isProduction
// }));
//这里我们定义了一个常量isProduction，它判断当前环境是否是production环境。
// 如果是，就使用缓存，如果不是，就关闭缓存。在开发环境下，
// 关闭缓存后，我们修改View，可以直接刷新浏览器看到效果，
// 否则，每次修改都必须重启Node程序，会极大地降低开发效率。

module.exports = templating;