var buf = new Buffer(10),
    buf1 = new Buffer([10, 20, 30, 40, 50]),
    buf2 = new Buffer("www.runoob.com", "utf-8"); //utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

var len = buf.write('www.runoob.comwww.runoob.com');
console.log("写入字节数 : "+  len);
console.log("写入数据 : "+  buf.toString('utf-8', 4, 6));
console.log("写入数据hex : "+  buf.toString('hex', 4, 6));
console.log("写入数据base64: "+  buf.toString('base64', 0, 100));
console.log(buf.toJSON());
console.log(buf.toJSON());



var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
var buffer4 = Buffer.concat([buffer1,buffer2], 12);
console.log("buffer3 内容: " + buffer3.toString());
console.log("buffer4 内容: " + buffer4.toString());
