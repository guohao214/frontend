let 
const
函数参数默认值
Map
Set
箭头符
class
模板字符串
模块加载
生成器函数 generator yield 


[1, 2, 3, 4, 5].map(function(v){
    return v + 1
})

// 使用箭头函数更改
[1, 2, 3, 4, 5].map(v => v + 1)

// 多行代码，最后需要return 
sum=(a,b,c)=>{ if (a) return a*b*c };
sum(1,1,2)


当function被作为method调用时，this指向调用对象

x=10;

function get100() {
	alert(this.x)
	alert(x)
}

var test = {
	x:100
};
test.one = function() {
	alert('one')
}

test.two = function() {
	alert('two')
}

test.three = function() {
	get100();
}



Array.prototype.forEach = function(callback) {
	for(var i = 0, l<this.length; i < l; i++) {
		callback(this[i]);
	}
}