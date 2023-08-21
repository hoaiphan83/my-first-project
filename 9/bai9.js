
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var email = document.getElementById("email").value;
    
    if (username.trim() === "") {
        document.getElementById("errorMessage").innerHTML = "Tên đăng nhập không được rỗng";
        return false;
    }
  
    if (password.length < 6) {
        document.getElementById("errorMessage").innerHTML = "Mật khẩu phải có ít nhất 6 ký tự";
        return false;
    }
  
    if (password !== repassword) {
        document.getElementById("errorMessage").innerHTML = "Mật khẩu và nhập lại mật khẩu không khớp";
        return false;
    }
  
    if (!(email.includes("@") && email.includes("."))) {
        document.getElementById("errorMessage").innerHTML = "Email không hợp lệ";
        return false;
    }
  
    return true;
}

