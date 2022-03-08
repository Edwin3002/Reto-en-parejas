const getAll = async() => {
    try {
        const data = await fetch(`https://server-games-app.herokuapp.com/games`);
        const json = await data.json();
        console.log(json)

        return json
    } catch (error) {
        console.log(error);
    }
};
getAll();

let url = 'https://server-games-app.herokuapp.com/games/'

let guardar = document.getElementById('btnGuardar');
let btnNombre = document.getElementById('btnNombre')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')

// crud
guardar.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        fetch("https://server-games-app.herokuapp.com/games", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: document.querySelector('#name').value,
                price: document.querySelector('#price').value,
                description: document.querySelector('#description').value,
                genre: document.querySelector('#genre').value,
                cover: document.querySelector('#imagen').value,
                platform: document.querySelector('#platform').value
            }),
          });
          alert('juego guardado')
    } catch (error) {
        console.log(error);
    }
})

btnNombre.addEventListener('click', async () => {
    let name1 = document.getElementById('name').value;

    let resp = await fetch(url);
    let data = await resp.json();

        // let modificar = data.find(user => user.correo === email);  cualquiera de los dos funciona
        let modificar = data.find(user => user.name.includes(name1));

        const {name, price,description, genre,cover, platform, id} = modificar;

        document.getElementById('name').value = name;
        document.getElementById('price').value = price;
        document.getElementById('description').value = description;
        document.getElementById('genre').value = genre;
        document.getElementById('imagen').value = cover;
        document.getElementById('platform').value = platform;
        document.getElementById('id').value = id;
        
        console.log(modificar);
})

btnEditar.addEventListener('click', async () => {
    let nameModificar = document.getElementById('name').value;
    let priceNameModificar = document.getElementById('price').value;
    let descriptionModificar = document.getElementById('description').value;
    let genreModificar = document.getElementById('genre').value;
    let imagenModificar = document.getElementById('imagen').value;
    let platformModificar = document.getElementById('platform').value;
    let idModificar = document.getElementById('id').value;

    await fetch(url+idModificar,{
        method: 'PUT',
        body: JSON.stringify({
            name: nameModificar,
            price: priceNameModificar,
            description: descriptionModificar,
            genre: genreModificar,
            imagen: imagenModificar,
            platform: platformModificar,
            id: idModificar
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

btnEliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value;
    await fetch(url + idEliminar,{
        method: 'DELETE'
    })
    // alert("juego borrado")
});

// // pintar pintarCartas
// function pintarCartas(data) {
//     let space = document.getElementById('cartas');
//     console.log(data)
// space.innerHTML = ''
//     data.forEach(element => {
//         const { name, price, genre, cover, platform} = element;
//         space.innerHTML += `
//                 <div class="card" style="width: 18rem;">
//             <div class="mosaico">

//                 <img src="${cover}" class="card-img-top" alt="...">
//             </div>
//             <div class="card-body">
//             <h5 class="card-title">${name}</h5>
//             <h6 class="card-title"><span class="platform">${platform} -</span> ${genre} </h6>
//             <p class="card-text fw-bold fs-3">${price}$<button class="btn btn-dark float-end" type="button" id="agregar">Comprar</button></p>
//             </div>
//         </div>`
//     });
// }
