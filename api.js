
let charactersList = document.getElementById('charactersList');
let hpCharacters = [];

let loadCharacters = async () => {
    try {
        let res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

let displayCharacters = (characters) => {
    let htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <br>
                <h4>Actor: ${character.actor}</h4>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();