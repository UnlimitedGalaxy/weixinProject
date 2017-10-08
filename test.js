const koa = require('koa');
const app = new koa();
const service = require('koa-static');
const fs = require('fs');
const koaBody = require('koa-body');

const handler = async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.response.status = err.statusCode || err.status || 500;
		ctx.response.body = {
			message: err.message
		};
	}
};

const main = async function(ctx) {
	const body = ctx.request.body;
	if (!body.name) ctx.throw(400, '.name required');
	ctx.body = { name: body.name };
};

app.use(koaBody());
app.use(handler);
app.use(main);
console.log('listen on 3000');
app.listen(3000);
