function loginVerifiers() {
	var username = document.getElementById("name").value;
	var password = document.getElementById("pwd").value;
	if (username == "") {
		alert("请输入用户名！");
		return false;
	}
	if (password == "") {
		alert("请输入密码！");
		return false;
	} else {
		return true;
	}
}

$(document).ready(function () {
	$(".button").on("click", function () {
		if (loginVerifiers()) {
			$.ajax({
				type: "post",
				url: url + "/api/login",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					email: $("#name").val(),
					password: md5($("#pwd").val()),
					type: "1"
				}),
				dataType: "json",
				success: function (res) {
					console.log(res)
					if (res.code == 1) {
						window.location.href = "index.html";
					} else {
						alert("登录失败！");
					}
				}
			});
		}
	})
});