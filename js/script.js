const getAll = async() => {
    try {
        const data = await fetch(`https://server-games-app.herokuapp.com/games`);
        const json = await data.json();
        pintarCartas(json)
        return json
    } catch (error) {
        console.log(error);
    }
};
getAll();



// pintar pintarCartas
function pintarCartas(data) {
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
