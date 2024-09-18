let choix = [];

fetch('json/choix.json') 
.then (response => response.json())
.then(data => {
choix.push(data)


});

console.log(choix)

function choicePierre() {

    let choixUser = document.getElementById('choixUser');
    let img = document.createElement('img');
    img.src = "image/pierre.png";
    choixUser.appendChild(img);
    img.style.height = "300px";


}

function choiceFeuille() {

    let choixUser = document.getElementById('choixUser');
    let img = document.createElement('img');
    img.src = "image/feuille.png";
    choixUser.appendChild(img);
    img.style.height = "300px";

}


function choiceCiseaux() {

    let choixUser = document.getElementById('choixUser');
    let img = document.createElement('img');
    img.src = "image/sciceaux.png";
    choixUser.appendChild(img);
    img.style.height = "300px";

}




function randomChoix() {
        return Math.floor(Math.random() * choix.length);
}
console.log(randomChoix())






document.getElementById('btnpierre').style.visibility = 'hidden'
document.getElementById('btnfeuille').style.visibility = 'hidden'
document.getElementById('btnciseaux').style.visibility = 'hidden'


let btnstart = document.getElementById('btnstart')

btnstart.addEventListener('click', () => {

    document.getElementById('btnpierre').style.visibility = 'visible'
    document.getElementById('btnfeuille').style.visibility = 'visible'
    document.getElementById('btnciseaux').style.visibility = 'visible'

});




let btnpierre = document.getElementById('btnpierre')


btnpierre.addEventListener('click', () => {

    choicePierre()
    document.getElementById('btnpierre').style.visibility = 'hidden'

    console.log(btnpierre);

});


let random = randomChoix()
let choixOpponent = document.getElementById('choixOpponent') 
 btnpierre.addEventListener('click', () => {
    let img2 = document.createElement('img');
    img2.src = choix[random]['image'];
    choixOpponent.appendChild(img2);
    img2.style.height = "300px";
});





let btnfeuille = document.getElementById('btnfeuille')

btnfeuille.addEventListener('click', () => {

    choiceFeuille()
    document.getElementById('btnfeuille').style.visibility = 'hidden'

});




let btnciseaux = document.getElementById('btnciseaux')

btnciseaux.addEventListener('click', () => {


    choiceCiseaux()
    document.getElementById('btnciseaux').style.visibility = 'hidden'

});






