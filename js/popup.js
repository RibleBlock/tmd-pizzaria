const botoes = document.querySelector('div#botoes');
const fundo = document.getElementById('fundo');
const close = document.getElementById('close');

for ( let open of botoes.children ) {
   open.addEventListener("click", () => {
      fundo.classList.add('show');
   });
}

close.addEventListener("click", () => fechar());

/* fecha o popup quando clica fora */
fundo.addEventListener('click', function(e) {
   if (e.target === this) fechar();
});

function fechar() {
   fundo.classList.remove('show')   
}

////////////////////////////////////////////

function modificaPopup(el) {
   titulo.innerHTML = el.innerText + '🍕';
   // if(screen.width >= 330) {
      // titulo.innerHTML += '🍕';
   // }
   imgIlustrativa.src = `images/ilustrativas/${el.innerText.toLowerCase()}.jpg`;
   imgIlustrativa.alt = el.innerText;
}

botoes.addEventListener('click', e => {
   const el = e.target;
   if(el.classList.contains('tradicionais')) {
      modificaPopup(el);
      return;
   }
   
   if(el.classList.contains('especiais')) {
      modificaPopup(el);
      return;
   }
   
   if(el.classList.contains('doces')) {
      modificaPopup(el);
      return;
   }
   
   if(el.classList.contains('calzones')) {
      modificaPopup(el);
      return;
   }
});
