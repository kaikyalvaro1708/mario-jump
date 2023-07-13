const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    // adiciona a animação de pulo
    mario.classList.add('jump');

    // remove a animação para acionar a animação novamente 
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500)
}

// Conlisão com o pipe
const loop = setInterval(() =>{
    // lado esquerdo da tela
    const pipePosition = pipe.offsetLeft;
    // Pegar as propiedades que estejam aplicados no mario
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    // parar a animação do tubo ao encostar ou o mario não pular
    // Menor ou igual a 120px
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        // Imagem de game over do mario
        mario.src= './imagens/game-over.png ';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';   
        
        clearInterval(loop);
    }
},10)  
// pressiona uma tecla e dispara a função jump
document.addEventListener('keydown', jump);