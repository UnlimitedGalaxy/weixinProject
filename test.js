const koa = require('koa');
const app = new koa();
const service = require('koa-static');
const fs = require('fs');
const koaBody = require('koa-body');

const asyncFun = async function() {
	return new Promise((resolve => setTimeout(() => resolve(), 2000)));
}

const one = async function(ctx, next) {
	ctx.body = 'start ';
	await next();
};

const two = async function(ctx, next) {
	ctx.body = ctx.body + 'middle ';
	await asyncFun();
	console.log('hello');
	next();
};

const three = async function(ctx, next) {
	ctx.body = ctx.body + 'end ';
	console.log('hello end');
	next();
};

app.use(one);
app.use(two);
app.use(three);

console.log('listen on 3000');
app.listen(3000);
