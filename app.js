//Creamos el array para agregar los nombres de amigos
let amigos = [];

//Agregamos una funcion para agregar los nombres de los amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //alerta para validar que el campo no este vacío
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre");
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