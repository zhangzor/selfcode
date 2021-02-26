//数字验证码
function numTestCode(n){
    var arr = [];
    for(var i = 0;i < n;i++){
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}
//数字、字母验证码
function testCode(n){
    var arr = [];
    for(var i = 0;i < n;i++){
        var num = parseInt(Math.random() * 123);
        if(num >= 0 && num <=9){
            arr.push(num);
        }else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){
            arr.push(String.fromCharCode(num));
        }else{
            i--;
        }
    }
    return arr.join("");
}
//判断单个字符是否为字母
function isABC(charStr){
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z"){
        return true;
    }else{
        return false;
    }
}
//判断单个字符是否符合数字字母下划线
function isDEF(charStr){
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= 0 && charStr <= 9){
        return true;
    }else{
        return false;
    }
}
//数字转中文
function numOfChinese(num){
    var arr = ["日","一","二","三","四","五","六"];
    return arr[num];
}

function doubleNum(n) { 
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
 }
//相差天数
function countOfDate(d1,d2){
    var day1 = new Date(d1);
    var day2 = new Date(d2);
    var time1 = day1.getTime();
    var time2 = day2.getTime();
    var time = Math.abs(time1-time2);
    return parseInt(time / 1000 /3600 / 24);
}
//输入n天，得到n天后的日期
function afterOfDate(n){
    var d = new Date();
    var day = d.getDate();
    d.setDate(day+n);
    return d;
}
//定时器
/* 
setInterval 设置定时时间，语法：setInterval(函数名,执行时间间隔)
clearInterval 关闭定时器
*/
var timer = setInterval(function () { 
    var i = 0;
    if(i == 5){
        clearInterval(timer);
    }
    document.write(i++ + "<br/>");
 },1000);
 //显示当前时间的方法
 function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;//0~11
    var date = d.getDate();

    var week = d.getDate();//0~6 0是周末

    week = numOfChinese(week);

    var hour = doubleNum(d.getHours());
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
    return str;
 }
 //自定义获取获取节点
 function nodeClassName(node,charStr){
     var nodeAll = node.getElementByTagName("*");
     var arr = [];
     for(var i = 0;i < nodeAll.lenght;i++){
         if(nodeAll[i].className == charStr){
             arr.push(nodeAll[i]);
         }
     }
     return arr;
 }