const dino = document.querySelector('.dino');
const backgroud = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyup(event){
    if(event.keyCode == 32)    {
        if(!isJumping){
            jump()
        }
    }
}

function jump(){
  

    isJumping = true;

    let upInterval = setInterval(()=>{
        if(position >=150){
            clearInterval(upInterval) 
            //descendo
            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping = false;
                }
                else{
                    position -=20;
                    dino.style.bottom = position + 'px';
                }                      
                
            },20)
            
        }else{
        //subindo
        position += 20;

        dino.style.bottom = position + 'px';

        }
        

    },20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;
    

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    backgroud.appendChild(cactus);

    //aqui aumentaria a velocidade do cactus, 
    //entao poderia aumentar a dificuldade ao longo do tempo 
    let leftInterval = setInterval(()=>{
        
        if(cactusPosition< -60){
            clearInterval(leftInterval);
            backgroud.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //game over 
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>'
        }else{
            cactusPosition -= 10;
        cactus.style.left=cactusPosition+'px';
        }

    },20)

    setTimeout(createCactus,randonTime)

}

createCactus();
document.addEventListener('keyup',handleKeyup);