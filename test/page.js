var demo1 = function() {
	/*
		获取 webpage 模块
		创建一个 webpage 对象
	*/
	var page = require('webpage').create();
	var url = 'http://phantomjs.org/';
	//打开网页
	page.open(url, function (status) {
		if (status !== 'success') {
		    console.log('error');
		  } else {
		    console.log('保存图片');
		  	page.render('phantomjs.png');
		  	//退出程序
		  }
		phantom.exit();
	});

	console.log('Loading a web page');
};


var demo2 = function(){
	/*
	    获取 webpage 模块
	    创建一个 webpage 对象
	*/
	var page = require('webpage').create();
	var url = 'http://phantomjs.org/';
	// 定义一个 ready 方法
	var ready = function(status){
	    if (status !== 'success') {
	        console.log('error');
	    } else {
	        var content = page.evaluate(function() {
	            return document.getElementsByTagName('h1')[0].textContent;;
	        });
	        console.log(content);
	    }
	    //退出程序
	    phantom.exit();
	}
	//打开网页
	page.open(url, ready);
	console.log('Loading a web page');
};



