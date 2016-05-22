var system = require('system');
// system.args 第一个参数是脚本路径
// 所以 length 为 1
if (system.args.length === 1) {
    console.log('没有传参');
} else {
    system.args.forEach(function (arg, i) {
            console.log(i + ': ' + arg);
    });
}
phantom.exit();