// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// CONTACT FORM SUBMISSION
// ===============================
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_yp8dkux', 'template_41jlolv', this)
    .then(function() {
      alert("Message sent successfully! Thank you for reaching out.");
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert("Oops... Something went wrong. Please try again.");
      console.error('EmailJS error:', error);
    });
});

// ===============================
// SKILL BARS ANIMATION ON SCROLL
// ===============================
const skillSection = document.querySelector('.skills');
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if(sectionPos < screenPos) {
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-level');
      skill.style.width = level;
    });
    // Remove event listener after animation triggers once
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
