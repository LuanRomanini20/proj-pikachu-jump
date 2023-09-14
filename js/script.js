const pikachu = document.querySelector('.pikachu');
const arbusto = document.querySelector('.arbusto');

const pulo = () => {
    pikachu.classList.add('pulo');

    setTimeout(() => {
    
        pikachu.classList.remove('pulo');

}, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const arbustoPosition = arbusto.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    console.log(pikachuPosition);

    if(arbustoPosition <= 120 && arbustoPosition > 0 && pikachuPosition < 80){
        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        pikachu.src='./assets/loser.png';
        pikachu.style.width = '130px'
        pikachu.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);
document.addEventListener('keydown', pulo);
