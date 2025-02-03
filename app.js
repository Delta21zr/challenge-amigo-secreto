const amigos = []; // Array global para almacenar los nombres

function agregarAmigo() {
    // Captura el valor del input
    const nombre = document.getElementById("amigo").value.trim();

    // Validación: Verificar si el campo está vacío
    if (nombre === "") {
        alert("El campo está vacío. Por favor, ingrese un nombre.");
        return; // Salir de la función
    }

    // Añadir el nombre al array
    amigos.push(nombre);

    // Añadir el nombre a la lista en el DOM
    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

function agregar() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el arreglo amigos y agregar cada nombre como un <li>
    amigos.forEach((amigo) => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;  // Asignar el nombre del amigo al <li>
        lista.appendChild(nuevoElemento);   // Añadir el <li> a la lista
    });
}

function sortearAmigo (){
    //verificar si hay amigos en el array
if (amigos.length === 0) {
    alert("no tienes amigos para sortear");
    return;
}
//generar un indice aleatorio
const indiceAleatorio = Math.floor(Math.random()* amigos.length);

// obtener al amigo sorteado
const amigoSorteado = amigos [indiceAleatorio];

//mostrar resulrado
document.getElementById("resultado").innerHTML = `el amigo secreto es  ${amigoSorteado}`;
}
