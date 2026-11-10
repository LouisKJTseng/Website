document.addEventListener('DOMContentLoaded', () => {
  const toggle=document.querySelector('.menu-button');
  const sidebar=document.querySelector('.sidebar');
  if(toggle&&sidebar){
    toggle.addEventListener('click',()=>{
      const open=sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }
});
