function createGrid(size, red, green, blue){
    doc.style.margin = "0";

    for (let i = 0; i<(size*size); i++){
        const div = document.createElement("div");
        divEdit(div, size);
        divFancy(div, red, green, blue);
        divContainer.appendChild(div);
    }
}


function divEdit(div, size){
    div.style.width = `${100 / size}vw`;
    div.style.height = `${95 / size}vh`;
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";
    div.style.float = "left";
    div.style.background='white';
}

function divFancy(div, red, green, blue){
    div.addEventListener('mouseenter', () => {

    if (div.style.backgroundColor == "white") {
        div.dataset.opacity = 0;
    }

    div.dataset.opacity = Number(div.dataset.opacity || 0) + 0.1;

    div.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${div.dataset.opacity})`;
    });
    
}

function reset(size){
    divContainer.replaceChildren();
    let randomR = Math.floor(Math.random()*255)+1;
    let randomG = Math.floor(Math.random()*255)+1;
    let randomB = Math.floor(Math.random()*255)+1;

    createGrid(size, randomR, randomG, randomB);
}

const doc = document.querySelector("body");
const but = document.querySelector("button");
const divContainer = document.createElement('div');
    doc.appendChild(divContainer);
reset(16);
but.addEventListener('click', () =>{
    let size = +prompt("How many squares per row (max 100)", 1);
    reset(size);
});
