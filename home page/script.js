// let run = "true";
// let running;

// do {
//   running = prompt("running:"); // Simulate user input
// } while (running !== correctPassword);

// console.log("Login successful!");




// Responsive Navbar Toggle
const navbarToggle = document.querySelector('.contactus button');
const navbarLinks = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('show-navbar');
});

// Dropdown Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (question.classList.contains('active')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

// Carousel Navigation
const prevButton = document.querySelector('.carousel-controls .prev');
const nextButton = document.querySelector('.carousel-controls .next');
const carouselCards = document.querySelectorAll('.testimonial-card');
let currentCardIndex = 0;

function showCarouselCard(index) {
  carouselCards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

showCarouselCard(currentCardIndex);

prevButton.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex - 1 + carouselCards.length) % carouselCards.length;
  showCarouselCard(currentCardIndex);
});

nextButton.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % carouselCards.length;
  showCarouselCard(currentCardIndex);
});

// Scroll to Section
const navbarItems = document.querySelectorAll('.navbar a');

navbarItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(item.getAttribute('href'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Responsive Adjustments
function handleResize() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    // Add specific changes for small screens
    document.querySelector('.content-left').style.textAlign = 'center';
    document.querySelector('.content-right').style.marginTop = '20px';
  } else {
    // Reset styles for larger screens
    document.querySelector('.content-left').style.textAlign = 'left';
    document.querySelector('.content-right').style.marginTop = '0';
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// Load More Button (Example for Trending Stories)
const loadMoreButton = document.querySelector('.load-more');
loadMoreButton.addEventListener('click', () => {
  alert('Loading more stories...');
  // Logic for loading additional content can be added here
});

// Subscription Form
const subscriptionForm = document.querySelector('.subscription form');
subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = subscriptionForm.querySelector('input[type="text"]').value;
  const email = subscriptionForm.querySelector('input[type="email"]').value;

  if (name && email) {
    alert(`Thanks for subscribing, ${name}! We'll keep you updated at ${email}.`);
  } else {
    alert('Please fill in both your name and email!');
  }
});
