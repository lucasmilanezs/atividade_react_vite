import { authApi } from './api.js';

const form = document.getElementById('forgot-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  try {
    await authApi.forgotPassword(email);

    message.innerText = 'Código enviado para o email.';
    message.className = 'message success';
  } catch (error) {
    message.innerText = error.detail;
    message.className = 'message error';
  }
});