function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.value.trim() !== '') {
        // Append user message to chat
        chatMessages.innerHTML += `<div class="user-message">${userInput.value}</div>`;
        
        // Simulate bot response (you can replace this with actual logic)
        const botResponse = "Hi there! I'm a simple chatbot.";
        chatMessages.innerHTML += `<div class="bot-message">${botResponse}</div>`;

        // Clear user input
        userInput.value = '';

        // Scroll to the bottom of the chatbox
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const startTalkingHeader = document.getElementById('startTalkingHeader');
    const startTalkingText = "Start Talking :)";
    let index = 0;
    let typedText = "";

    function type() {
        typedText += startTalkingText[index];
        startTalkingHeader.innerText = typedText;
        index++;

        if (index < startTalkingText.length) {
            setTimeout(type, 200); // Adjust the typing speed here (in milliseconds)
        } else {
            // Reset the index and start over
            index = 0;
            typedText = "";
            setTimeout(type, 1200); // Adjust the delay before starting over (in milliseconds)
        }
    }

    // Trigger the typing effect on page load
    type();
});

function toggleScrollbarColor() {
    const scrollbarThumb = document.querySelector('body::-webkit-scrollbar-thumb');

    // Check current color and toggle
    if (scrollbarThumb.style.backgroundColor === 'black') {
        scrollbarThumb.style.backgroundColor = 'blue';
    } else {
        scrollbarThumb.style.backgroundColor = 'black';
    }
}
