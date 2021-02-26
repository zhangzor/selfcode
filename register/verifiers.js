function PasswordVerifiers(){
    var password = document.getElementById("pwd").value;
    var ConfirmPassword = document.getElementById("ConfirmPassword").value;
    if(password=="") {
        alert('密码不得为空')
        return false;
    }

    if(ConfirmPassword=="") {
        alert('二次密码不得为空')
        return false;
    }

    if(password != ConfirmPassword){
        alert("两次密码不一致！")
        return false;
    }else{
        return true;
    }
}

function emailVerifiers(){
    var email = document.getElementById("email").value;
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(email)){
        alert('提示\n\n请输入有效的E_mail！');
        myreg.focus();
        return false;
    }else{
        return true;
    }
}

//验证码的设置
function setTime(){
    var c = 60;
    $(".seconds").attr("disabled","disabled");//点击一次不可再点
    var interval = setInterval(function(){//定义定时器
        $(".seconds").val(c+"s之后重试");
        c--;
        if(c == 0){
            clearInterval(interval);//清除定时器
            $(".seconds").val("重新获取验证码");
            $(".seconds").removeAttr("disabled");//删除这个属性
            c=60;
        }	
    },1000);
}

//用ajax提交到后台的发送邮件接口
$(document).ready(function(){
    $(".seconds").on("click", function (){
        if(emailVerifiers()) {
            $.ajax({
                type:"post",
                url: url + "/api/gaincode",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    email: $("#email").val()
                }),
                dataType:"json",
                async : false,
                cache : false,
                success:function(res){
                    if(res){
                        alert("验证码发送成功");
                    }
                },
                error:function(){
                    alert("验证码发送失败");
                }
            })
            setTime();//开始倒计时
        }
    })
})

$(document).ready(function(){
    $(".button").on("click",function(){
        if(PasswordVerifiers()) {
            $.ajax({
                type: "post",
                url: url + "/api/register",
                data : {
                    email:$("#email").val(),
                    password:$("#pwd").val(),
                    code: $(".securityCode").val(),
                    type:"1"
                },
                success: function (res) {
                    console.log(res)
                }
            })     
        }
    })
})