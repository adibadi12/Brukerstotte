const overskrift = document.createElement("h1");
overskrift.innerText = "HEIHEISKABIDO.";
document.body.appendChild(overskrift);

const knapp = document.createElement("button");
knapp.innerText = "REDEEM!";
knapp.id = "KNAPPO";
knapp.addEventListener("click", trutcha);
document.body.appendChild(knapp);

function trykk(evt) {
    console.log(evt.target.id);
}

const knappa = document.createElement("button");
knappa.innerText = "UNREDEEM!";
knappa.id = "KNAPPA";
knappa.addEventListener("click", remove);
document.body.appendChild(knappa);

let arraySetning = ["Adi", " er", "flink", "i", "programmering"];
let i = 0;

function trutcha () {
    const add = document.createElement("h2");
    add.innerText = arraySetning [i];
    i = i + 1;

    if  (i > 5) {
        add.innerText = ["ingenting mer å si."];
    }
    document.body.appendChild(add);
}

function remove () {
    const element = document.querySelector("h2");
    if (element) {
        element.remove();
    }
}