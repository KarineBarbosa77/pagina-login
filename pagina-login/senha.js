document.addEventListener('DOMContentLoaded', function() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        const label = input.previousElementSibling;
        
        if (input.value === '') {
            label.style.display = 'block';
        } else {
            label.style.display = 'none';
        }

        input.addEventListener('input', function() {
            if (input.value === '') {
                label.style.display = 'block';
            } else {
                label.style.display = 'none';
            }
        });
        
        input.addEventListener('blur', function() {
            if (input.value === '') {
                label.style.display = 'block';
            }
        });
    });
});

function validatePassword() {
    var newPassword = document.getElementById('newPassword').value; // Obtém o valor do campo Nova Senha
    var confirmPassword = document.getElementById('confirmPassword').value; // Obtém o valor do campo Confirmar Nova Senha
    var errors = []; // Array para armazenar mensagens de erro
    var errorMessages = document.getElementById('errorMessages'); // Container para exibir mensagens de erro
  
    // Limpa mensagens de erro anteriores
    errorMessages.innerHTML = '';
  
    // Verifica se a senha tem pelo menos 8 caracteres
    if (newPassword.length < 8) {
        errors.push("A senha deve conter pelo menos 8 caracteres.");
    }

    // Condições para a verificação da nova senha
    if (!/[A-Z]/.test(newPassword)) {
        errors.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!/[a-z]/.test(newPassword)) {
        errors.push("A senha deve conter pelo menos uma letra minúscula.");
    }
    if (!/\d/.test(newPassword)) {
        errors.push("A senha deve conter pelo menos um número.");
    }
  
    // Verifica se as senhas digitadas são iguais
    if (newPassword !== confirmPassword) {
        errors.push("As senhas digitadas não coincidem.");
    }
  
    // Exibe mensagens de erro ou mensagem de sucesso
    if (errors.length > 0) {
        errors.forEach(function(error) {
            errorMessages.innerHTML += '<p class="error">' + error + '</p>';
        });
    } else {
        alert('Senha redefinida com sucesso!');
        document.getElementById('passwordForm').reset(); // Reseta o formulário
    }
}
