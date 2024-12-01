const correctPassword = hxh114514191981023333;

    function checkPassword()
 {
        // 获取用户输入的密码
        const userPassword = document.getElementById("password").value;

        // 检查密码是否匹配（不区分大小写）
        if (userPassword.toLowerCase() === correctPassword.toLowerCase()) {
            // 密码正确，跳转到目标页面
            window.location.href = "Adult/index";
        } else {
            // 密码错误，显示错误信息
            document.getElementById("error").textContent = "密码错误，请重试。";
            alert("wrang!")
        }

        // 阻止表单的默认提交行为
        return false;
}