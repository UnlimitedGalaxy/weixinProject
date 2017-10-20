require('shelljs/global');

const webpack = require('webpack');
const fs = require('fs');
const _ = require('lodash');
const { resolve } = require('path');

const r = url => resolve(process.cwd(), url);

const webpackConf = require('./webpack.conf');
const config = require(r('./mina-config'));
const assetsPath = r('./mina');

rm('-rf', assetsPath);
mkdir(assetsPath);

var renderConf = webpackConf;

renderConf.entry = () => _.reduce(config.json.pages, (en, i) => {
	en[i] = resolve(process.cwd(), './', '${i}.mina');
	
	return entry;
});

renderConf.output = {
	path: r('./mina'),
	filename: '',
}

var compiler = webpack(renderConf);