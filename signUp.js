document.getElementById('signUpForm').addEventListener('submit', function(event) {
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const suID = document.getElementById('suID').value;
  if (!/^\d{7}$/.test(suID)) {
      document.getElementById('suIDError').textContent = 'SeattleU ID must be exactly 7 digits.';
      valid = false;
  }

  const suEmail = document.getElementById('suEmail').value;
  if (!/^[^\s@]+@seattleu\.edu$/.test(suEmail)) {
      document.getElementById('suEmailError').textContent = 'Please enter a valid SeattleU email address ending with @seattleu.edu.';
      valid = false;
  }

  const uname = document.getElementById('uname').value;
  if (uname.length < 3 || uname.length > 20) {
      document.getElementById('unameError').textContent = 'Username must be between 3 and 20 characters.';
      valid = false;
  }

  const psw = document.getElementById('psw').value;
  if (psw.length < 8) {
      document.getElementById('pswError').textContent = 'Password must be at least 8 characters long.';
      valid = false;
  }

  const rePsw = document.getElementById('rePsw').value;
  if (psw !== rePsw) {
      document.getElementById('rePswError').textContent = 'Passwords do not match.';
      valid = false;
  }

  if (!valid) {
      event.preventDefault(); // Prevent form submission if validation fails
  }
});