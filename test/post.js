
"use strict";

function test1() {
	var page = require('webpage').create(),
	    server = 'http://127.0.0.1:8000/',
	    data = 'name=张三&age=20&sex=男';

	page.open(server, 'post', data, function (status) {
	    if (status !== 'success') {
	        console.log('Unable to post!');
	    } else {
	        console.log("content : ",page.content);
	    }
	    phantom.exit();
	});
}();

function test2() {
	var page = require('webpage').create(),
	    server = 'http://127.0.0.1:8000/',
	    data = 'name=张三&age=20&sex=男';

	var headers = {
	    "Content-Type": "application/json"
	}

	page.open(server, 'get', data, headers,function (status) {
	    if (status !== 'success') {
	        console.log('Unable to post!');
	    } else {
	        console.log("content : ",page.content);
	    }
	    phantom.exit();
	});
}();

test2();