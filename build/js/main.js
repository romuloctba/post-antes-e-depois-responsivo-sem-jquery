(function(){
var containers = document.getElementsByClassName('antesDepois');
for (i=0, qtd=containers.length; i < qtd; i++) {
  
  console.log('Criada Instância ' + i);
  
  var container = document.getElementsByClassName('antesDepois')[i]
    , antes = container.getElementsByClassName('antes')[0]
    , depois = container.getElementsByClassName('depois')[0]
    , depoisImg = depois.getAttribute('data-src');
  
  depois.style.backgroundImage = "url('"+depoisImg+"')";
  container.addEventListener("mousemove", comparaPosicao, false);
  container.addEventListener("touchstart",comparaPosicao,false);
 	container.addEventListener("touchmove",comparaPosicao,false);
}
})()

function comparaPosicao(e){
  var retangulo = this.getBoundingClientRect();
  var posicao = ((e.pageX - retangulo.left) / this.offsetWidth)*100;
  if (posicao <= 100) {
    this.getElementsByClassName('depois')[0].style.width= posicao+"%";
  }
}