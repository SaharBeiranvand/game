
function b() {
  document.getElementById("login-form").style.display = 'none';
    document.getElementById("register-form").style.display = 'block';
    document.getElementById("register-form-link").style.color = 'red';
    document.getElementById("login-form-link").style.color ='gray';
}
function a() {
    document.getElementById("login-form").style.display = 'block';
    document.getElementById("register-form").style.display = 'none';
    document.getElementById("login-form-link").style.color = 'red';
    document.getElementById("register-form-link").style.color ='gray';

}
