(() => {
  const gate = document.getElementById('age-gate');
  const options = document.getElementById('payment-options');
  if (gate && options) {
    const unlock = () => { gate.classList.add('is-hidden'); options.setAttribute('aria-hidden','false'); sessionStorage.setItem('muse-age-confirmed','yes'); };
    if (sessionStorage.getItem('muse-age-confirmed') === 'yes') unlock();
    document.getElementById('age-yes')?.addEventListener('click', unlock);
  }
})();
