let registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", function(event) {
    event.preventDefault()

    // 1. Lấy thông tin từ giao diện
    let fullName = registerForm.fullname.value.trim();
    let email = registerForm.email.value.trim();
    let password = registerForm.password.value.trim();
    let confirmPassword = registerForm.confirm_password.value.trim();
    // 2. Kiểm tra thông tin và thông báo

    // 3. Lưu thông tin đăng ký
    let user = {
        fullName: fullName,
        email: email,
        password: password
    }

    let accounts;
    if (localStorage.getItem("accounts") === null){
        accounts = []
    }
    else{
        accounts = JSON.parse(localStorage.getItem("accounts"))
    }
    //  kiểm tra có trùng thông tin không

    // lưu thông tin
    accounts.push(user)
    localStorage.setItem("accounts", JSON.stringify(accounts))
    // 4. Thông báo đăng ký thành công
    alert("Đăng ký tài khoản thành công")
    // 5. Chuyển sang trang đăng nhập

})