let choix = [];
let playerscore = document.getElementById('playerscore');
let random;
let btnciseaux = document.getElementById('btnciseaux')
let choixOpponent = document.getElementById('choixOpponent')
let btnfeuille = document.getElementById('btnfeuille')
let btnpierre = document.getElementById('btnpierre')
let score = 0;
let scoree= 0;

fetch('json/choix.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((v) => {
            choix.push(v);
        })


        function randomChoix(params = []) {
            return Math.floor(Math.random() * params.length);
        }

        

        btnpierre.addEventListener('click', () => {
            choixOpponent.innerHTML = ''
            random = randomChoix(choix)
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "200px";

            choice(btnpierre.id, random)
            // document.getElementById('btnpierre').style.visibility = 'hidden'
            document.getElementById('btncontinue').style.visibility = 'visible'
        });



        btnfeuille.addEventListener('click', () => {
            choixOpponent.innerHTML = ''
            random = randomChoix(choix)
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "200px";
            // document.getElementById('btnfeuille').style.visibility = 'hidden'
            choice(btnfeuille.id, random)
            document.getElementById('btncontinue').style.visibility = 'visible'

        });



        btnciseaux.addEventListener('click', () => {
            choixOpponent.innerHTML = ''
            random = randomChoix(choix)
            let img2 = document.createElement('img');
            img2.src = choix[random]["image"];
            choixOpponent.appendChild(img2);
            img2.style.height = "200px";
            // document.getElementById('btnciseaux').style.visibility = 'hidden'

            choice(btnciseaux.id, random);
            document.getElementById('btncontinue').style.visibility = 'visible'

        });





    });





function choice(params, random) {

    let choixUser = document.getElementById('choixUser');
    choixUser.innerHTML = '';
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


    img.style.height = "200px";

    if (points == "image/pierre.png" && random == 1) {
        console.log("feuille")
        scoree += 1;

        opponentscore.innerText = 'score:' + scoree
    }else if(points == "image/feuille.png" && random == 2){
        console.log("ciseau")
        scoree += 1;

        opponentscore.innerText = 'score:' + scoree
    }else if(points == "image/sciceaux.png" && random == 0){
        console.log("pierre")
        scoree += 1;

        opponentscore.innerText = 'score:' + scoree
    }

    if (score == 5){
        alert("Bien joué vous avez gagné c'est cool pour vous mais c'est pas ca qui fera que vous serez plus un chomeur ")
    } else if(scoree == 5){
        alert("C'est perdu vous êtes nul !! ")
    }


    
}





document.getElementById('btnpierre').style.visibility = 'hidden'
document.getElementById('btnfeuille').style.visibility = 'hidden'
document.getElementById('btnciseaux').style.visibility = 'hidden'
document.getElementById('btncontinue').style.visibility = 'hidden'



let btnstart = document.getElementById('btnstart')

btnstart.addEventListener('click', () => {

    document.getElementById('btnstart').style.visibility = 'hidden'
    document.getElementById('btnpierre').style.visibility = 'visible'
    document.getElementById('btnfeuille').style.visibility = 'visible'
    document.getElementById('btnciseaux').style.visibility = 'visible'

});

let btncontinue = document.getElementById('btncontinue')

btnstart.addEventListener('click', () => {

});


