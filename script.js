function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("show_password");

    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function toggleConfirmPasswordVisibility() {
    var confirmPasswordField = document.getElementById("confirm_password");
    var showConfirmPasswordCheckbox = document.getElementById("show_confirm_password");

    if (showConfirmPasswordCheckbox.checked) {
        confirmPasswordField.type = "text";
    } else {
        confirmPasswordField.type = "password";
    }
}

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("error_message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        return false;  // フォームの送信を中止する
    } else {
        errorMessage.style.display = "none";
        return true;  // フォームを送信する
    }
}
