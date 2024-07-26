let nome = document.getElementById("oi")
let texto = document.getElementById("oi2")
let oioioi = ["M" , "e","u", " ", "c", "u", "r", "r", "í", "c", "u", "l", "o"]
let IndexTxt = 0
let LengTxt = oioioi.length
let timer = 10
let isShowing = false;

document.body.onload = hideDisplay

function hideDisplay(){
 document.getElementById('curriculo-container').style.display = 'none'
}

function showDisplay(){
    document.body.style.textAlign = 'start'
     document.getElementById('curriculo-container').style.display = 'block'
}



function removeDivContent(){
    const divTeste = document.getElementsByClassName("container")[0];
    divTeste.remove()
    createPortDiv()
}

function createPortDiv(){
    let createport = document.createElement('div');
    createport.classList.add("porttext")
    createport.style.fontFamily = "Impact,Charcoal,sans-serif"
    createport.style.fontSize = '100px'
    createport.style.color = 'white'
    createport.style.textShadow = '5px 8px blue'
    createport.style.marginTop = '20%'
    document.body.appendChild(createport)
    let subdiv = document.createElement('div')
    subdiv.classList.add("subtxt")
    document.body.appendChild(subdiv)
    subdiv.style.color = 'white'
    subdiv.style.textShadow = '2px 2px blue'
    setInterval(addDivContent, 100, LengTxt > IndexTxt)
}


function addDivContent(){
    const divPort = document.getElementsByClassName("porttext")[0]
    const subdivPort = document.getElementsByClassName("subtxt")[0]
    let subtexto = document.createTextNode("Roger Lucas Lopes Rangel")
    if (IndexTxt < LengTxt){    
    let texto = document.createTextNode(oioioi[IndexTxt]);
    divPort.appendChild(texto);
    IndexTxt += 1
    }
    if(LengTxt - IndexTxt == 1){
        subdivPort.appendChild(subtexto)
        setInterval(funcTimer, 200)
        setInterval(showDisplay, 2000)
    }
}

function funcTimer(){
    if(timer > 0 ){
        timer -= 1
        console.log(timer)
}
if (timer == 0){
    console.log('parou')
    timer=-1
    removeDivPort()

}
}

function removeDivPort(){
    document.getElementsByClassName("porttext")[0].remove()
    const subdivPort = document.getElementsByClassName("subtxt")[0].remove()
}


function oi(divid){
    console.log('funcionou')
    document.getElementById(divid).style.display = 'none'
    
}