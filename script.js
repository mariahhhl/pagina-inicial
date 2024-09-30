let scrollAmount=0;

function scrollProdutos(direction) {
  const productlist= document.getElementById('lista-produtos');
 const producWidth= productlist.children[0].offsetWidth + 20;
  scrollAmount += direction*producWidth; 
productlist.scrollTo({
  left: scrollAmount,
  behavior:'smooth'
}); 
}

const secoes = document.querySelectorAll('.secao');

const body = document.body;

secoes.forEach(secao => {
  secao.addEventListener('mouseover', () => {
    const newBackground = secao.getAttribute ('data-background');
    body.classList.add('transition');
    body.style.setProperty('--background', 'url(${newBackground})');
    body.style.backgroundImage=newBackground;
  })
  
  secao.addEventListener('mouseout',()=> {
    body.style.backgroundImage= "url(#A70400)"
  })
})

