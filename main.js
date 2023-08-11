function tocaSomPom() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_pom').play();

}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_clap').play();

}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_tim').play();

}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_puff').play();

}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_splash').play();

}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_toim').play();

}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_psh').play();

}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_tic').play();

}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom() {
    // document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_tom').play();

}

document.querySelector('.tecla_tom').onclick = tocaSomTom;


let tecla = null;

document.addEventListener('keydown', function(event) {

    tecla = event.key;
    tecla = tecla.toLowerCase();

    console.log(event.key);

    if (tecla === 'q') {
        tocaSomPom();
    } else if (tecla === 'w') {
        tocaSomClap();
    } else if (tecla === 'e') {
        tocaSomTic();
    } else if (tecla === 'a') {
        tocaSomPuff();
    } else if (tecla === 's') {
        tocaSomSplash();
    } else if (tecla === 'd') {
        tocaSomToim();
    } else if (tecla === 'z') {
        tocaSomPsh();
    } else if (tecla === 'x') {
        tocaSomTic();
    } else if (tecla === 'c') {
        tocaSomTom();
    }

})