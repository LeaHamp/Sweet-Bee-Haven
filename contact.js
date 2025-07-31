function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        topic: document.getElementById('topic').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to your server
    // For demonstration, we'll log it and show a success message
    console.log('Form Data:', formData);

    // Example using Email.js (you'll need to sign up and include their script)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            alert('Message sent successfully!');
            closeContactModal();
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
}

// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeContactModal();
    }
} 