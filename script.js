const dimEl = document.querySelector('#dimensions');

dimEl.innerHTML = `${window.innerWidth} x ${window.innerHeight}px`
window.addEventListener('resize', () => {
  dimEl.innerHTML = `${window.innerWidth} x ${window.innerHeight}px`
});