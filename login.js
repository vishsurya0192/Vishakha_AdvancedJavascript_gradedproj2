function login() {
  let username = document.getElementById('user-input').value;
  let password = document.getElementById('password-input').value;
  window.localStorage.setItem('username', username);
  window.localStorage.setItem('password', password);

  if(username === 'username' && password === 'password') {
    window.location = 'resume.html';
  } else {
    document.getElementById('invalid-login').style.display = 'block';
    document.getElementById('user-input').value = ''
    document.getElementById('password-input').value = '';
  }
}