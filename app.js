const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all other answers
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
      i.querySelector('.faq-answer').style.display = 'none';
    });

    // Toggle current answer
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.toggle('active');
    answer.style.display = isOpen ? 'block' : 'none';
  });
});

// navbar

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open_nav_bar'); // slide menu
  hamburger.classList.toggle('active'); // toggle open/close icon
}
);
// const navBar = document.getElementsByClassName("nav-menu");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Jab neeche scroll ho → menu hide
  if (scrollTop > lastScrollTop) {
      nav.classList.remove('open_nav_bar'); 
    hamburger.classList.remove('active');
  }
  lastScrollTop = scrollTop;

});