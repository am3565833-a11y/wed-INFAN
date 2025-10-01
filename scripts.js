
AOS.init({
  duration: 800,
  once: true
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;


  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");


      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
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
        selectDate(day, month, year);
      });
    }
    calendarDays.appendChild(dayElement);
  }
}


function selectDate(day, month, year) {
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre"
  ];

  const dateStr = `${day} de ${months[month]} de ${year}`;
  document.getElementById('selectedDateText').textContent = `Fecha seleccionada: ${dateStr}`;

  const btn = document.getElementById('selectDateBtn');
  if (btn) btn.classList.remove('disabled');
}




