document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});

document.getElementById('send').addEventListener('click', function() {
    let userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() !== '') {
        let messageDiv = document.createElement('div');
        messageDiv.textContent = `You: ${userMessage}`;
        document.getElementById('messages').appendChild(messageDiv);

        let botReplyDiv = document.createElement('div');
        botReplyDiv.textContent = `Bot: I'm here to help!`;
        document.getElementById('messages').appendChild(botReplyDiv);

        document.getElementById('userInput').value = '';
    }
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let autoScrollInterval;

// Function to update the carousel display
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Function to go to the previous image
document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

// Function to start auto-scrolling
function startAutoScroll() {
    autoScrollInterval = setInterval(nextImage, 3000); // Change image every 3 seconds
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Event listeners to pause auto-scrolling on mouse enter and resume on mouse leave
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoScroll);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoScroll);

// Start auto-scrolling on page load
document.addEventListener('DOMContentLoaded', function() {
    startAutoScroll();
});
