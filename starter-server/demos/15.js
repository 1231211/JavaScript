/**
 * 404错误
 */
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.status = 404;
    ctx.response.body = 'Page Not Fount';
};
app.use(main);
app.listen(3000);