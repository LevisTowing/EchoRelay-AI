(function() {
    // Create a chat container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'my-ai-widget';
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '20px';
    chatContainer.style.right = '20px';
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
    chatContainer.style.border = '1px solid #ccc';
    chatContainer.style.borderRadius = '10px';
    chatContainer.style.backgroundColor = '#fff';
    chatContainer.style.zIndex = '9999';
    chatContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    chatContainer.innerHTML = `
        <div id="chat-header" style="padding:10px; background:#4CAF50; color:white; font-weight:bold; text-align:center; cursor:pointer;">
            AI Assistant
        </div>
        <div id="chat-messages" style="height:300px; overflow-y:auto; padding:10px;"></div>
        <input id="chat-input" placeholder="Type here..." style="width:100%; box-sizing:border-box; padding:10px; border:none; border-top:1px solid #ccc;">
    `;

    document.body.appendChild(chatContainer);

    const messages = chatContainer.querySelector('#chat-messages');
    const input = chatContainer.querySelector('#chat-input');

    input.addEventListener('keypress', async function(e) {
        if(e.key === 'Enter' && input.value.trim() !== '') {
            const userMessage = input.value;
            messages.innerHTML += `<div style="text-align:right; margin:5px; color:#4CAF50;">${userMessage}</div>`;
            input.value = '';

            // Call your AI backend
            const response = await fetch('https://your-backend.com/api/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message: userMessage})
            }).then(res => res.json());

            messages.innerHTML += `<div style="text-align:left; margin:5px;">${response.reply}</div>`;
            messages.scrollTop = messages.scrollHeight;
        }
    });
})();
