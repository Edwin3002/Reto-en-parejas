const getAll = async() => {
    try {
        const data = await fetch(`https://server-games-app.herokuapp.com/games`);
        const json = await data.json();
        return json
    } catch (error) {
        console.log(error);
    }
};

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
                genre: document.querySelector('#genre'.value),
                cover: document.querySelector('#imagen').value,
                platform: document.querySelector('#platform').value
            }),
          });
          alert('juego guardado')
    } catch (error) {
        console.log(error);
    }
})


