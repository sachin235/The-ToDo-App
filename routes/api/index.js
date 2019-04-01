const route=require('express').Router();

route.use('/todo',require('./todo').route);

module.exports.route=route;