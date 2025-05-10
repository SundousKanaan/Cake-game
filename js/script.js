console.log('Hallo, dit is een cake decoratie spel. (by Sundous Kanaan)');

// Variable's (herstarten img)
var herstartenknop = document.querySelector('#herstarten')

// Dom Manipulatie functies (herstarten img)
function reload(){
    location.reload();
}

// EventListeners (herstarten img)
herstartenknop.addEventListener('click' , reload);

// Variable's (meisje elementen)
var tekstElement = document.querySelector ('#tekst');
var naamInput = document.querySelector('#input');
var meisjeImg = document.querySelector('#meisje');
var hmmSound = document.querySelector('#HmmSound');
var cheeringSound = document.querySelector('#crowdcheering')
var achtergrondElement = document.querySelector('#keuken');

// Dom Manipulatie functies (meisje elementen)
function praten (){
    console.log('praten');
    tekstElement.textContent = naamInput.value + ' laten we je taart versieren.';
    console.log(naamInput.value + ' laten we je taart versieren.');
    meisjeImg.src = "img/meisje0.png";
    HelloSound.play();
    console.log('Hello sound');
    meisjeImg.classList.remove('spring');
}

function meisje (){
    console.log('meisje click');
    tekstElement.textContent = naamInput.value + ' wat wil je doen?';
    console.log(naamInput.value + ' wat wil je doen?');
    hmmSound.play();
    console.log('hmm sound');
    meisjeImg.src = "img/meisje1.png";
    meisjeImg.classList.remove('spring');
}

// EventListeners (meisje elementen)
naamInput.addEventListener('change' , praten)
meisjeImg.addEventListener('click', meisje);

// Variable's (achtergrond elementen)
var keukenknop = document.querySelector('#keukenknop');
var winkelknop = document.querySelector('#winkelknop');
var Feestknop = document.querySelector('#feestknop');

// Dom Manipulatie functies (achtergrond elementen)
function keukenachtergrond(){
    console.log('keuken achtergrond');
    achtergrondElement.classList.remove('winkelachtergrond','feestachtergrond');
}

function winkelachtergrond(){
    console.log('winkel achtergrond');
    achtergrondElement.classList.add('winkelachtergrond');
    achtergrondElement.classList.remove('feestachtergrond');
}

function feestachtergrond(){
    console.log('feest achtergrond');
    achtergrondElement.classList.add('feestachtergrond');
    achtergrondElement.classList.remove('winkelachtergrond');
}

function mousepointer (){
    keukenknop.classList.add('mousepointer');
    winkelknop.classList.add('mousepointer');
    Feestknop.classList.add('mousepointer');
}

// EventListeners (achtergrond elementen)
keukenknop.addEventListener('click' , keukenachtergrond);
winkelknop.addEventListener('click' , winkelachtergrond);
Feestknop.addEventListener('click', feestachtergrond);
keukenknop.addEventListener('mouseover' , mousepointer);
winkelknop.addEventListener('mouseover' , mousepointer);
Feestknop.addEventListener('mouseover' , mousepointer);

// Variable's (cake elementen)
var cakeImg = document.querySelector('#cake');
var vanillaButton = document.querySelector('#vanillaimg');
var chocoButton = document.querySelector('#chocoimg');
var slagroomImg = document.querySelector('#roze-slagroom');
var aardbeiImg = document.querySelector('#aardbei')
var hartjesImg = document.querySelector('#hartjes')
var dreamingsound = document.querySelector('#dreamingsound');
var magicsound = document.querySelector('#magicsound');
var HelloSound = document.querySelector('#HelloSound');
var partyElement = document.querySelector('#party');
var tafelImg = document.querySelector('#tafel');
var topPrijs = document.querySelector('#prijsbox')
var prijsspan= document.querySelector('#prijs');

var smaak = 'wit';
var decoration = 'geen';
tooncake();

// Dom Manipulatie functies (cake elementen)
function tooncake(){
    var modelcake = "img/cakeimages/cake-" + smaak + "-" + decoration + ".png";
    cakeImg.src = modelcake ;

    var cakekosten = 10 ;
    if (smaak == 'vanilla'){
        cakekosten = cakekosten + 3 ;
        console.log('cakekosten',cakekosten);
    }
    if(smaak == 'choco'){
        cakekosten = cakekosten + 3 ;
        console.log('cakekosten',cakekosten);
    }
    if (smaak == 'roze'){
        cakekosten = cakekosten + 6 ;
        console.log('cakekosten',cakekosten);
    }
    if ((decoration == 'aardbei') || (decoration == 'hartjes')){
        cakekosten = cakekosten + 5 ;
        console.log('cakekosten',cakekosten);
    }
    if (decoration == 'klaar'){
        cakekosten = cakekosten + 13 ;
        console.log('cakekosten',cakekosten);
    }
    if (modelcake == 'img/cakeimages/cake-roze-klaar.png'){
        cakekosten = cakekosten + 15 ;
        console.log('cakekosten',cakekosten);
        meisjeImg.src = "img/meisje2.png";
        tekstElement.textContent = 'Goed gedaan de cake ziet er heerlijk uit.';
        partyElement.classList.add('partystart');
        achtergrondElement.classList.add('partyanimation');
        cla;
        console.log('party start',);
        topPrijs.classList.add('pink');
        console.log('top prijs');
        cheeringSound.play();
        console.log('cheeringSound');
    }
    else{
        tekstElement.textContent = naamInput.value + ' laten we je taart versieren.';
        meisjeImg.src = "img/meisje0.png";
        partyElement.classList.remove('partystart');
        meisjeImg.classList.remove('spring');
        achtergrondElement.classList.remove('partyanimation');
        topPrijs.classList.remove('pink');
    }
    prijsspan.textContent = cakekosten ;
}

function smaakvanilla(){
    smaak = 'vanilla';
    tooncake();
    console.log('vanilla cake');
    dreamingsound.play();
    console.log('dreamingsound');
}

function smaakchoco(){
    smaak = 'choco'; 
    tooncake();
    console.log('choco cake');
    dreamingsound.play();
    console.log('dreamingsound');
}

function smaakslagroom(){
    smaak = 'roze';
    tooncake();
    console.log('add slagroom');
    magicsound.play();
    console.log('magicsound');
}

function decoratieaardbei (){
    if(decoration == 'hartjes'){
        decoration = 'klaar';
        console.log('add hartjes dan aardbei');
        magicsound.play();
        console.log('magicsound');
    } else{
        decoration = 'aardbei';
        console.log('add aardbei');
        magicsound.play();
        console.log('magicsound');
    } 
    tooncake();
}

function decoratiehartjes (){
    if(decoration == 'aardbei'){
        decoration = 'klaar';
        console.log('add aardbei dan hartjes');
        magicsound.play();
        console.log('magicsound');
    } else{
        decoration = 'hartjes';
        console.log('add hartjes');
        magicsound.play();
        console.log('magicsound');
    } 
    tooncake();
}

// EventListeners (cake elementen)
vanillaButton.addEventListener('click' , smaakvanilla);
chocoButton.addEventListener('click' , smaakchoco);
slagroomImg.addEventListener('dragend' , smaakslagroom);
aardbeiImg.addEventListener('dragend' , decoratieaardbei);
hartjesImg.addEventListener('dragend' , decoratiehartjes);

// Variable's (notities elementen)
var clicknote = document.querySelector('#note1');
var dragendnote = document.querySelector('#note2')

// Dom Manipulatie functies (notities elementen)
function noteaan1 (){
    clicknote.classList.add('noteaan1');
    console.log('click note aan');
}

function noteout1 (){
    clicknote.classList.remove('noteaan1');
    console.log('click note out');
}

function noteaan2 (){
    dragendnote.classList.add('noteaan2');
    console.log('dragen note aan')
}

function noteout2 (){
    dragendnote.classList.remove('noteaan2');
    console.log('dragen note out')
}
// EventListeners (notities elementen)
vanillaButton.addEventListener('mouseover' , noteaan1);
vanillaButton.addEventListener( 'mouseleave' , noteout1);
chocoButton.addEventListener('mouseover' , noteaan1);
chocoButton.addEventListener( 'mouseleave' , noteout1);
slagroomImg.addEventListener('mouseover' , noteaan2);
slagroomImg.addEventListener( 'mouseleave' , noteout2);
aardbeiImg.addEventListener('mouseover' , noteaan2);
aardbeiImg.addEventListener( 'mouseleave' , noteout2);
hartjesImg.addEventListener('mouseover' , noteaan2);
hartjesImg.addEventListener( 'mouseleave' , noteout2);