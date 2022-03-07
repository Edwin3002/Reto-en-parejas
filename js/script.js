const getAll = async() => {
    try {
        const data = await fetch(`https://server-games-app.herokuapp.com/games`);
        const json = await data.json();
        console.log(json)
        pintarCartas(json)
        return json
    } catch (error) {
        console.log(error);
    }
};
getAll();

let guardar = document.querySelector('#btnGuardar');

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


async function pintarCartas(data) {
    let space = document.getElementById('cartas');
    console.log(data)
space.innerHTML = ''
    data.forEach(element => {
        const { name, price, genre, cover, platform} = element;
        space.innerHTML += `
                <div class="card" style="width: 18rem;">
            <div class="mosaico">

                <img src="${cover}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-title"><span class="platform">${platform} -</span> ${genre} </h6>
            <p class="card-text fw-bold fs-3">${price}$<button class="btn btn-dark float-end" type="button" id="agregar">Comprar</button></p>
            </div>
        </div>`
    });
}
