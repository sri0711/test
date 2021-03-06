// importing some node packages for development
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { domain } = require('process');
const port = process.env.PORT || 8000;
// variable iniatlizing for directory
const app = express();
const views = path.join(__dirname, '../views/hbs_files');
const template = path.join(__dirname, '../views/template');
const domain1 = require('../routers/domain');

// inialiginzing directories
app.set('view engine', 'hbs');
app.set('views', views);
app.use(express.static(path.join(__dirname, '../public')));
hbs.registerPartials(template);
app.use(domain1);

// server settings
app.listen(
	port,
	console.log('server is started .server is running on 127.0.0.1:' + port)
);
