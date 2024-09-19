let choix = [];
let playerscore = document.getElementById('playerscore');
let random;
let btnciseaux = document.getElementById('btnciseaux')
let choixOpponent = document.getElementById('choixOpponent')
let btnfeuille = document.getElementById('btnfeuille')
let btnpierre = document.getElementById('btnpierre')
let score = 0;

fetch('json/choix.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((v) => {
            choix.push(v);
        })


        function randomChoix(params = []) {
            return Math.floor(Math.random() * params.length);
        }


        random = randomChoix(choix)

        btnpierre.addEventListener('click', () => {
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "300px";

            choice(btnpierre.id, random)
            document.getElementById('btnpierre').style.visibility = 'hidden'
        });



        btnfeuille.addEventListener('click', () => {
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "300px";
            document.getElementById('btnfeuille').style.visibility = 'hidden'
            choice(btnfeuille.id, random)
            document.getElementById('btnfeuille').style.visibility = 'hidden'

        });



        btnciseaux.addEventListener('click', () => {
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "300px";
            document.getElementById('btnciseaux').style.visibility = 'hidden'

            choice(btnciseaux.id, random);
            document.getElementById('btnciseaux').style.visibility = 'hidden'

        });





    });





function choice(params, random) {

    let choixUser = document.getElementById('choixUser');
    let img = document.createElement('img');
    let points;

    switch (params) {
        case "btnpierre":
            img.src = "image/pierre.png";
            points = "image/pierre.png";
            break;
        case "btnfeuille":
            img.src = "image/feuille.png";
            points = "image/feuille.png";
            break;
        case "btnciseaux":
            img.src = "image/sciceaux.png";
            points = "image/sciceaux.png";
            break;

    }
    choixUser.appendChild(img);

    console.log(points);
    if (points == "image/pierre.png" && random == 2) {
        console.log("pierre")
        score += 1;

        playerscore.innerText = 'score:' + score
    }else if(points == "image/feuille.png" && random == 0){
        console.log("feuille")
        score += 1;

        playerscore.innerText = 'score:' + score
    }else if(points == "image/sciceaux.png" && random == 1){
        console.log("ciseau")
        score += 1;

        playerscore.innerText = 'score:' + score
    }


    img.style.height = "300px";

}





document.getElementById('btnpierre').style.visibility = 'hidden'
document.getElementById('btnfeuille').style.visibility = 'hidden'
document.getElementById('btnciseaux').style.visibility = 'hidden'


let btnstart = document.getElementById('btnstart')

btnstart.addEventListener('click', () => {

    document.getElementById('btnstart').style.visibility = 'hidden'
    document.getElementById('btnpierre').style.visibility = 'visible'
    document.getElementById('btnfeuille').style.visibility = 'visible'
    document.getElementById('btnciseaux').style.visibility = 'visible'

});

