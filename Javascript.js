
// Script simples para interatividade
document.addEventListener('DOMContentLoaded', function(){
  // botão mostrar mais no fluxo.html
  const btn = document.getElementById('showMore');
  if(btn){
    btn.addEventListener('click', function(){
      const more = document.getElementById('moreText');
      if(more.classList.contains('d-none')){
        more.classList.remove('d-none');
        btn.textContent = 'Esconder';
      } else {
        more.classList.add('d-none');
        btn.textContent = 'Mostrar definição detalhada';
      }
    });
  }

  // Modal open (exocitose page)
  const openModalBtn = document.getElementById('openModalVideo');
  if(openModalBtn){
    openModalBtn.addEventListener('click', function(){
      const modal = new bootstrap.Modal(document.getElementById('modalVideo'));
      modal.show();
    });
  }

});
