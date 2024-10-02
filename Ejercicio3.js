const array = ["Joaquin", 1, ["Hola","Adios"], true]

// 1. Recorrer el array e insertar en el localStorage:

array.forEach((element, index) => {
    localStorage.setItem(`variable${index}`, JSON.stringify(element));
});

// 2. Recorrer de 0 a la longitud del array y obtener los valores del localStorage:


const container = document.createElement('div');

for (let i = 0; i < array.length; i++) {

    const value = JSON.parse(localStorage.getItem(`variable${i}`));

    // 3. Crear un div por cada valor y añadir el valor en su interior
    const div = document.createElement('div');
    div.textContent = `Valor ${i}: ${value}`;

    // 4. Insertar estos divs en el contenedor
    container.appendChild(div);
}

document.body.appendChild(container);
