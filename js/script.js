const getAll = async() => {
    try {
        const data = await fetch(`https://server-games-app.herokuapp.com/games`);
        const json = await data.json();
        return json
    } catch (error) {
        console.log(error);
    }
};



