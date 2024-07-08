function showSuccessMessage() {
    const messageElement = document.getElementById('successMessage');
    messageElement.style.display = 'block';
    setTimeout(function() {
        messageElement.style.display = 'none';
    }, 5000);
}

showSuccessMessage();