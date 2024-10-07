function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  var mobile = document.getElementById("mobile").value;
  var mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Invalid mobile number format.");
    return false;
  }

  return true;
}
