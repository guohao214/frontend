var util = require('util');

util.create = function (sub, base) {
  //sub.prototype = base.prototype
  sub.prototype = Object.create(base.prototype)
  sub.prototype.constructor = sub
  console.log(sub.prototype.constructor)
}


function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function() {
    console.log('Hello ' + this.name);
  };
}
Base.prototype.showName = function() {
  console.log(this.name);
};
function Sub() {
  this.name = 'sub';
}
//util.inherits(Sub, Base);

util.create(Sub, Base)

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);