document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navbarLinks = document.getElementById('navbar-links');
  const teamSlider = document.getElementById('team-slider');
  const closeBtn = document.getElementById('close-btn');

  menuIcon.addEventListener('click', function () {
      navbarLinks.classList.toggle('active');
      teamSlider.style.display = teamSlider.style.display === 'block' ? 'none' : 'block';
  });

  closeBtn.addEventListener('click', function () {
      navbarLinks.classList.remove('active');
      teamSlider.style.display = 'none';
  });
});


// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const textOverlay = document.getElementById('text-overlay');
  const welcomeText = "Welcome to GG Chatbot. Let's get started!";
  let index = 0;

  function type() {
      textOverlay.textContent += welcomeText[index];
      index++;

      if (index === welcomeText.length) {
          setTimeout(resetText, 2000); // Wait for 2 seconds before resetting the text
      } else {
          setTimeout(type, 70); // Adjust the typing speed here (in milliseconds)
      }
  }

  function resetText() {
      textOverlay.textContent = '';
      index = 0;
      setTimeout(type, 70);
  }

  // Trigger the typing effect on page load
  type();
});

document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Show or hide the "Back to Top" button based on scroll position
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  };

  // Scroll to the top of the page when the button is clicked
  backToTopBtn.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
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



