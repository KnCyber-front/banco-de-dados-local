const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Quando clicar em "Registrar" no painel esquerdo
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Quando clicar em "Login" no painel direito
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});