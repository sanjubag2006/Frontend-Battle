window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

document.body.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => appearOnScroll.observe(fader));

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Web', 'UI', 'SEO', 'Apps'],
        datasets: [{
            label: 'Projects',
            data: [12, 19, 3, 5],
            backgroundColor: ['#3f51b5', '#5a55ae', '#7986cb', '#c5cae9']
        }]
    }
});

const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starsContainer.appendChild(star);
}