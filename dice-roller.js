//rolar 2 dados de 1 a 6;
// somar esse valores;

window.addEventListener("load", contador);
window.addEventListener("load", createNewElelment)
let cont = [];
let soma = [];
let prev = [];
let d1 = [];
let d2 = [];
for (i = 0; i <= 1000; i++) {
    let dado1 = Math.floor((Math.random() * 6) + 1);
    let dado2 = Math.floor((Math.random() * 6) + 1);
    soma.push(dado1 + dado2);
};

function contador() {
    array_elements = soma.sort(ordenar_numeros);
    array_elements.sort(ordenar_numeros);
    let current = null;
    let cnt = 0;
    for (let i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                cont.push(current + "  :  " + cnt);
                d1.push(cnt);
                d2.push(current);
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }

    }
    if (cnt > 0) {
        cont.push(current + "  :  " + cnt);
        d2.push(current);
    }

    for (let letter in cont) {
        const span = document.createElement("li");
        const textContent = ` ${cont[letter]}${"; "} `;
        span.innerText = textContent;
        const letters = document.getElementById("d1");
        letters.appendChild(span);
    }
}

function createNewElelment() {
    for (i = 1; i <= d2.length; i++) {
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = 40 + "px";
        newElement.style.height = d1[i] + "px";
        let newText = document.createTextNode(d2[i]);
        newElement.appendChild(newText);
        let destination = document.getElementById("d4");
        destination.appendChild(newElement);
    }
}

function ordenar_numeros(a, b) {
    return a - b;
}