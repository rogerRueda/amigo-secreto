//Creamos el array para agregar los nombres de amigos
let amigos = [];

//Agregamos una funcion para agregar los nombres de los amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //alerta para validar que el campo no este vacío
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre");
    //alerta para verificar que no este duplicado el nombre
    } else if (amigos.includes(nombreAmigo)) {
        alert("El amigo ya se encuentra en la lista");
    } else {
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value = "";
        mostrarListaAmigo();
    }
}

//Agregamos una funcion para actualizar la lista de amigos
function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

//Agregamos la funcion para sortear amigo
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
    } else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}