// Filter proyek
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.proj');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('on'));
  chip.classList.add('on');
  const f = chip.dataset.f;
  projects.forEach(p => {
    p.hidden = !(f === 'all' || p.dataset.c.split(' ').includes(f));
  });
}));

// Tandai menu sesuai bagian yang sedang dilihat
const links = document.querySelectorAll('.side nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
