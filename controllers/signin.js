// sign in:
const model = require('../model');
console.log(model);

module.exports = {
    'POST /signin': async (ctx, next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
            let Manager = model.manager;
            var manager = await Manager.findAll(); 
            console.log(Object.prototype.toString.call(manager)); 
            console.log(manager[0].dataValues); 
                //设置session
            // ctx.session.email=manager[0].dataValues.email;
            console.log("kong");   
        if (email === 'admin@example.com' && password === '123456') {
            console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};