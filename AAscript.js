
function toggleChat() {
  const popup = document.getElementById('chatPopup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you! We will get back to you shortly.');
  toggleChat();
}
