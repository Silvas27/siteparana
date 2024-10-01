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
    // Envio de mensagens
document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message) {
        const messagesContainer = document.getElementById('messagesContainer');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.classList.add('message');

        messagesContainer.appendChild(newMessage);
        messageInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, escreva uma mensagem!');
    }
});
