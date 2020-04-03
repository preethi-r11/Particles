const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const context = canvas.getContext("2d");
const particles = [];



function random (min, max){
    return Math.random() * (max-min) + min;
}


function draw(){
    const particle= {
        x: canvas.width/2,
        y:canvas.height/2,
        xvel: Math.random(),
        yvel: Math.random(),
        size: 5,
    };
    particles.push(particle);

    if (particles.length > 300){
        particles.shift();
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(i=0; i <particles.length; i+=1){
     p= particles[i];
     context.fillStyle = `rgb(${random (0, 255)}, ${random(0, 255)},${random(0, 255)})`;
     context.fillRect(p.x, p.y, p.size, p.size);
     p.x += p.xvel;
     p.y -= p.yvel;
  
    }

   window.requestAnimationFrame(draw);
  
}

window.requestAnimationFrame(draw);




