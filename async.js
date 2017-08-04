var fs = require('fs');

var async = require('asyncawait/async')
var await = require('asyncawait/await')

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);

      console.log(data.toString())
      resolve(data);
    });
  });
};

var gen = function* () {
  try {
    var f1 = yield readFile('./1.txt');
    var f2 = yield readFile('./2.txt');
    console.log(f1.toString());
    console.log(f2.toString());
  } catch(e) {
    console.log(e)
  }
};


//  npm install asyncawait
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var sleep = async(
    function sleep(timeout) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, timeout);
        });
    }
);

(async(
    function () {
        console.log('Do some thing, ' + new Date());
        await(sleep(3000));
        console.log('Do other things, ' + new Date());
    }
))();
