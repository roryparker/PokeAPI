const express = require('express')
const path = require("path")
const app = express()
const cors = require('cors')
const PORT = 9999
let pokemon = {
    'Bulbasaur': {
        'Name': "Bulbasaur",
        'Number': 001,
        'Type': "Grass",
        'Type2': "Poison",
        'Species': "Seed Pokemon"
    },
    'Ivysaur': {
        'Name': "Ivysaur",
        'Number': 002,
        'Type': "Grass",
        'Type2': "Poison",
        'Species': "Seed Pokemon"
    },
    'Venasaur': {
        'Name': "Venasaur",
        'Number': 003,
        'Type': "Grass",
        'Type2': "Poison",
        'Species': "Seed Pokemon"
    },
    'Charmander': {
        'Name': "Charmander",
        'Number': 004,
        'Type': "Fire",
        'Species': "Lizard Pokemon"
    },
    'Charmeleon': {
        'Name': "Charmeleon",
        'Number': 005,
        'Type': "Fire",
        'Species': "Lizard Pokemon"
    },
    'Charizard': {
        'Name': "Charizard",
        'Number': 006,
        'Type': "Fire",
        'Type2': "Flying",
        'Species': "Lizard Pokemon"
    },
    'Squirtle': {
        'Name': "Squirtle",
        'Number': 007,
        'Type': "Water",
        'Species': "Tiny Turtle Pokemon"
    },
    'Wartortle': {
        'Name': "Wartortle",
        'Number': 008,
        'Type': "Water",
        'Species': "Medium Turtle Pokemon"
    },
    'Blastoise': {
        'Name': "Blastoise",
        'Number': 009,
        'Type': "Water",
        'Species': "Big Turtle Pokemon"
    },
    'Caterpie': {
        'Name': "Caterpie",
        'Number': 010,
        'Type': "Bug",
        'Species': "Tiny Worm Pokemon"
    },
    'Metapod': {
        'Name': "Metapod",
        'Number': 010,
        'Type': "Bug",
        'Species': "Cocoon Pokemon"
    },
    'Butterfree': {
        'Name': "Butterfree",
        'Number': 011,
        'Type': "Bug",
        'Species': "Butterfly Pokemon"
    },
    'Weedle': {
        'Name': "Weedle",
        'Number': 013,
        'Type': "Bug",
        'Species': "Hairy Bug Pokemon"
    },
    'Kakuna': {
        'Name': "Kakuna",
        'Number': 014,
        'Type': "Bug",
        'Species': "Cocoon Bug Pokemon"
    },
    'Beedrill': {
        'Name': "Beedrill",
        'Number': 014,
        'Type': "Bug",
        'Species': "Bee Pokemon"
    },
    'Unknown': {
        'Name': "Unknown",
        'Number': "Unknown Number",
        'Type': "Unknown Type",
        'Species': "Unknown Species"
    }
}

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "\index.html"));
});

app.get('/api/pokemon/:pokemonName', (request, response) => {
    const pokemonName = request.params.pokemonName
    console.log(pokemonName)

    if (pokemon[pokemonName]) {
        response.json(pokemon[pokemonName])
    } else {
        response.json(pokemon['Unknown'])
    }

});

app.get('/api/pokemon/', (request, response) => {
    response.json(pokemon)
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`This my Pokemon API server running on ${PORT}`)
});