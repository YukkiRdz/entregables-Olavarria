const container = document.getElementById('container');

//tomamos la info del pokemon por su id y creamos su card
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createCards(data)
        });
}

//recorre la cantidad de pokemons que le damos por parametros
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

//agregamos cada elemento y sus clases/urls
function createCards(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}` //padStart agrega 0 delante (cant, number)

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    //agregamos todo al cdiv creado en html
    container.appendChild(card);
}

fetchPokemons(9)