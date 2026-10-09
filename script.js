document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Selecionando os elementos
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');

  let isValid = true;

  // Limpa mensagens de erro e sucesso anteriores
  emailError.textContent = '';
  passwordError.textContent = '';
  successMessage.textContent = '';
  emailInput.parentElement.classList.remove('error');
  passwordInput.parentElement.classList.remove('error');

  // Validação do e-mail/usuário
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Por favor, preencha o e-mail ou usuário.';
    emailInput.parentElement.classList.add('error');
    isValid = false;
  }

  // Validação da senha
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Por favor, preencha a senha.';
    passwordInput.parentElement.classList.add('error');
    isValid = false;
  }

  // Se tudo estiver preenchido corretamente
  if (isValid) {
    successMessage.textContent = 'Login realizado com sucesso!';
  }
});