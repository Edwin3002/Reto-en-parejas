const getAll = async () => {
  try {
    const data = await fetch(`https://server-games-app.herokuapp.com/games`);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

let btnGuardar = document.getElementById("btnGuardar");
let btnNombre = document.getElementById("btnNombre");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementById("btnEliminar");

// crud
btnGuardar.addEventListener("click", (e) => {
  const fixString = (string) => {
    return string.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  };
  e.preventDefault();
  try {
    fetch("https://server-games-app.herokuapp.com/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fixString(document.querySelector("#name").value),
        price: document.querySelector("#price").value,
        description: document.querySelector("#description").value,
        genre: document.querySelector("#genre").value,
        cover: document.querySelector("#imagen").value,
        platform: document.querySelector("#platform").value,
      }),
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Juego guardado",
      showConfirmButton: false,
      timer: 1500,
    });
    document.querySelector("#name").value = ``;
    document.querySelector("#price").value = ``;
    document.querySelector("#description").value = ``;
    document.querySelector("#genre").value = ``;
    document.querySelector("#imagen").value = ``;
    document.querySelector("#platform").value = ``;
  } catch (error) {
    console.log(error);
  }
});

btnNombre.addEventListener("click", async () => {
  let name1 = document.getElementById("name").value;

  const fixString = (string) => {
    return string.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  };

  let resp = await getAll();

  // let modificar = data.find(user => user.correo === email);  cualquiera de los dos funciona
  let modificar = resp.find((user) => user.name.includes(fixString(name1)));

  const { name, price, description, genre, cover, platform, id } = modificar;

  document.querySelector("#name").value = name;
  document.querySelector("#price").value = price;
  document.querySelector("#description").value = description;
  document.querySelector("#genre").value = genre;
  document.querySelector("#imagen").value = cover;
  document.querySelector("#platform").value = platform;
  document.querySelector("#id").value = id;

});

btnEditar.addEventListener("click", async () => {

  let idModificar = document.querySelector("#id").value;

  await fetch(`https://server-games-app.herokuapp.com/games/${idModificar}`, {
    method: "PUT",
    body: JSON.stringify({
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        description: document.querySelector("#description").value,
        genre: document.querySelector("#genre").value,
        cover: document.querySelector("#imagen").value,
        platform: document.querySelector("#platform").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Juego editado",
    showConfirmButton: false,
    timer: 1500,
  });
  document.querySelector("#name").value = ``;
  document.querySelector("#price").value = ``;
  document.querySelector("#description").value = ``;
  document.querySelector("#genre").value = ``;
  document.querySelector("#imagen").value = ``;
  document.querySelector("#platform").value = ``;
});

btnEliminar.addEventListener("click", async () => {
  let idEliminar = document.querySelector("#id").value;
  await fetch(`https://server-games-app.herokuapp.com/games/${idEliminar}`, {
    method: "DELETE",
  });
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Juego eliminado",
    showConfirmButton: false,
    timer: 1500,
  });
  document.querySelector("#name").value = ``;
  document.querySelector("#price").value = ``;
  document.querySelector("#description").value = ``;
  document.querySelector("#genre").value = ``;
  document.querySelector("#imagen").value = ``;
  document.querySelector("#platform").value = ``;
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
