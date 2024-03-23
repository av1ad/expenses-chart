// Fetch data from local JSON file and dynamically generate bars
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const chart = document.querySelector('.chart');
    data.forEach(item => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${item.amount}%`;
      bar.setAttribute('data-amount', `$${item.amount}`);
      if (item.day === new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()) {
        bar.classList.add('current');
      }
      chart.appendChild(bar);
    });
  });
