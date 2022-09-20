
const samurai = document.querySelector('.samurai');
const Ghost = document.querySelector('.Ghost');

const jump = () => {
    samurai.classList.add('jump');
    setTimeout(()=>{
        samurai.classList.remove('jump')
    }, 500);
}
const loop = setInterval(()=> {

    const GhostPosition = Ghost.offsetLeft;
    const samuraiPosition = +window.getComputedStyle(samurai).bottom.replace('px','');

        if (GhostPosition <= 60 &&GhostPosition > 0 && samuraiPosition < 80 ){
            Ghost.style.animation = 'none';
            Ghost.style.left = `${GhostPosition}px`;
            samurai.style.animation = 'none';
            samurai.style.bottom = `${samuraiPosition}px`
        }
},10);

document.addEventListener('keydown', jump);