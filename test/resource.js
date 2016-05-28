/*
    获取 webpage 模块
    创建一个 webpage 对象
*/
var page = require('webpage').create();
var address = 'http://127.0.0.1:8000/';
var system = require('system');
var server = require('webserver').create();


page.onResourceRequested = function (req) {
    console.log(JSON.parse(JSON.stringify(req, undefined, 4)).url);
};

page.onResourceReceived = function(response) {
  	//console.log('Receive ' + JSON.stringify(response, undefined, 4));
};



page.open(address, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    }
    window.setTimeout(function () {
        phantom.exit(1);
    }, 5000);
});