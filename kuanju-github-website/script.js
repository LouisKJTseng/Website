document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const sidebar = document.querySelector('.sidebar');
  if (button && sidebar) {
    button.addEventListener('click', () => {
      const open = sidebar.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  }
  // Use a local photo (assets/profile.jpg) when provided; otherwise try the original Google Sites photo.
  const photo = document.getElementById('profile-photo');
  if (photo) {
    const original = photo.dataset.original;
    const fallback = () => {
      if (original && photo.src !== original && !photo.dataset.triedOriginal) {
        photo.dataset.triedOriginal = '1'; photo.src = original;
      } else { photo.remove(); }
    };
    photo.addEventListener('error', fallback);
  }
});
