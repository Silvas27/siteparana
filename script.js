document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messagesContainer = document.getElementById('messagesContainer');

    // Função para exibir mensagens
    function displayMessages() {
        messagesContainer.innerHTML = ''; // Limpa mensagens atuais
        const messages = JSON.parse(localStorage.getItem('messages')) || []; // Obtém mensagens do localStorage

        messages.forEach((msg) => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'receiver'); // Classe para mensagem recebida
            messageDiv.textContent = msg; // Define o texto da mensagem
            messagesContainer.appendChild(messageDiv); // Adiciona a mensagem ao container
        });
    }

    // Função para enviar mensagem
    sendMessageButton.addEventListener('click', function () {
        const messageText = messageInput.value.trim(); // Obtém texto da mensagem

        if (messageText) {
            const messages = JSON.parse(localStorage.getItem('messages')) || []; // Obtém mensagens do localStorage
            messages.push(messageText); // Adiciona nova mensagem
            localStorage.setItem('messages', JSON.stringify(messages)); // Atualiza localStorage
            messageInput.value = ''; // Limpa o campo de entrada
            displayMessages(); // Atualiza a visualização
        }
    });

    // Carrega mensagens ao iniciar a página
    displayMessages();
});
// Efeito de transição ao passar o mouse sobre as fotos
document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
    
