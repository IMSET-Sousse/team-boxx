document.addEventListener("DOMContentLoaded", () => {
  const featureCards = document.querySelectorAll(".feature-card");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-card");
      }
    });
  }, {
    threshold: 0.2
  });

  featureCards.forEach(card => observer.observe(card));
});

