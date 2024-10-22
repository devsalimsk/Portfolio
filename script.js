// Get the modal and button elements
var modal = document.getElementById("aboutMeModal");
var btn = document.getElementById("aboutMeBtn");
var span = document.getElementsByClassName("close")[0];

// Open the modal and disable scrolling
btn.onclick = function() {
  modal.style.display = "block"; // Show modal
  document.body.classList.add('no-scroll'); // Disable scrolling
}

// Close the modal and enable scrolling when clicking the close button
span.onclick = function() {
  modal.style.display = "none"; // Hide modal
  document.body.classList.remove('no-scroll'); // Enable scrolling
}

// Close the modal and enable scrolling when clicking outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide modal
    document.body.classList.remove('no-scroll'); // Enable scrolling
  }
}



const toggleThemeIcon = document.getElementById('toggleThemeIcon');

toggleThemeIcon.addEventListener('click', () => {
    // Get the current background color
    const currentColor = document.body.style.backgroundColor;

    // Toggle background and text color
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});