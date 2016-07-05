/* -+前端面试题整理-wze1602+-+-+-+-+-+-+-+- */






/* -+-前端开发面试知识点大纲+-+-+-+-+-+-+-+-+-+-+-+-+- */


/* -+- HTML部分 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */



/* -+- CSS 部分 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */


/* -+- JavaScript 部分 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */
//数组相关操作
	arr.push() 尾部添加 
	arr.pop() 尾部删除
	arr.shift() 删除并返回数组的第一个元素
	arr.Unshift() 向数组的开头添加一个或更多元素，并返回新的长度。
	arr.splice() 删除元素，并向数组添加新元素，返回被删除的项目
	arr.sort() 对数组的元素进行排序
	arr.concat() 连接两个或更多的数组，并返回结果。

	// 在索引是1的位置删除两个元素, 并新增一个元素替换
	// 前两个参数必填, 第一个参数为负数 则从头添加
	var arr = ['a','b','c','d','e','f','g','h'];
	console.log(arr.toString());
	arr.splice(1,2,"vv");		
	console.log(arr.toString());

	如何判断数组类型
	arr instanceof Array;  // true of false
	arr.constructor == Array; // true of false

	// 判断一个对象是否有你给出名称的属性或对象, 除原型链
	arr.hasOwnProperty('test');
	// 判断其原型链的对象是否存在于指定对象实例中
	arr.prototype.isPrototypeOf(test)


/* -+- 其他问题 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */




/* -+- 高频题目 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */
//javascript中的深拷贝和浅拷贝 有什么区别??(引用和新对象)
浅拷贝: 直接赋值的方式就是浅拷贝,只是传递了指针
		(问题:更改其中的任何一个，然后其他的也会跟着改变)
var objA={name:'yy',age:26};
var objB=objA;

objA.name='xx';
console.log(objB);   //Object { name="xx", age=26}
console.log(objA);   //Object { name="xx", age=26}

深拷贝: 就是把对象的属性遍历一遍，赋给一个新的对象
var objC={name:'yy',age:26};
var objD=new Object();

objD.name=objC.name;
objD.age=objC.age;
objC.name='xx';
console.log(objD);   //Object { name="yy", age=26}
console.log(objC);   //Object { name="xx", age=26}
------------------------

方法一：js的slice函数
方法二：js的concat方法 


------------------------------------------------------------------------------
1.有一个长度未知的数组a，如果它的长度为0就把数字1添加到数组里面，
否则按照先进先出的队列规则让第一个元素出队。
另外，原题还有字数限制的，只有在字数小于30并且结果正确时才可以满分。
var a = [];
a.length > 0 ? a.shift() : a.push(1);

a[a.length > 0 ?'shift':'push'](1);

!a.shift() && a.push(1);

-------------------------------------------------------------------------------
var test = (function(a) {
    this.a = a;
    return function(b) {
        return this.a + b;
    }
} (function(a, b) {
    return a;
}(1, 2))); 
// this, 闭包
// 函数内部的this
// 函数中返回函数,返回函数中又带有表达式
// 立即调用函数作为参数传到函数内部

test(3); // 4

------------------------------------------------------------------------------
5.实现对数组进行乱序

var arr = [0,1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
	return Math.random() > 0.5;
});


-------------------------------------------------------------------------------
//写几个你常用的媒体查询??
@media screen and (min-width: 600px) { /* CSS Code */ }  
@media screen and (max-width: 599px) { /* CSS Code */ }  
@media screen and ((min-width:20em) and (max-width:50em)) { /* CSS Code */ }  




-------------------------------------------------------------------------------
//下面代码输出什么...
(function() {
	for(var i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i);		// 输出...
		}, 500);
	}
})();


