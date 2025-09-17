
document.addEventListener('DOMContentLoaded', function() {

  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
  });
  
  gsap.from(".navbar", {duration: 1, y: -100, opacity: 0, ease: "power3.out"});
  gsap.from(".hero-content h2", {duration: 1, y: 50, opacity: 0, delay: 0.3, ease: "back.out"});
  gsap.from(".hero-content p", {duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "back.out"});
  gsap.from(".btn-modern", {duration: 1, y: 50, opacity: 0, delay: 0.7, ease: "back.out"});
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
  });
  
const darkModeToggle = document.getElementById('darkModeToggle');
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Animación de giro
  gsap.to(icon, { rotation: 360, duration: 0.5, ease: "power1.inOut", onComplete: () => {
    if(document.body.classList.contains('dark-mode')) {
      icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    } else {
      icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    }
    gsap.set(icon, { rotation: 0 }); // reset rotación
  }});
  
  // Guardamos en localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Activar modo oscuro si estaba guardado
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
}

});



document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const programCards = document.querySelectorAll('.programas-container .col-md-6');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      programCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-filter') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});


 AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    document.addEventListener('DOMContentLoaded', function() {
      const currentYear = new Date().getFullYear();
      document.getElementById('current-year').textContent = currentYear;
      document.getElementById('calendar-year').textContent = currentYear;
      document.getElementById('footer-year').textContent = currentYear;
      generateCalendar(currentYear, 10);
    });

    function generateCalendar(year, month) {
      const calendarDays = document.getElementById('calendar-days');
      calendarDays.innerHTML = '';
  
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();
      
      for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'empty-day';
        calendarDays.appendChild(emptyDay);
      }
      

      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        
        if (day >= 24 && day <= 29) {
          dayElement.classList.add('active');
          dayElement.addEventListener('click', function() {
            selectDate(day);
          });
        }
        calendarDays.appendChild(dayElement);
      }
    }
    
    function selectDate(day) {
      const year = new Date().getFullYear();
      const dateStr = `27 de noviembre de ${year}`; 
      document.getElementById('selectedDateText').textContent = `Fecha seleccionada: ${dateStr}`;
      document.getElementById('selectDateBtn').classList.remove('disabled');
    }