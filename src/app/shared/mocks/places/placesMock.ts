import { Places } from "src/app/core/models/places/places";

export const PlacesMock: Places[] = [
    {
        name: "Mjölnir",
        group: "Village",
        className: 'village1',
        description: {
            faction: "Germinianos",
            level: 1,
            price: 30000,
            treasure: 3000,
            population: 300,
            power: {
                value: 1000,
                soldiers: 50
            },
            coordinates: {
                top: 270,
                left: 210
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 500
                }
            ]
        }
    },
    {
        name: "Eisendorf",
        group: "Village",
        className: "village2",
        description: {
            faction: "Germinianos",
            level: 2,
            price: 90000,
            treasure: 10000,
            population: 650,
            power: {
                value: 3000,
                soldiers: 150
            },
            coordinates: {
                top: 230,
                left: 270
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 800
                }
            ]
        }
    },
    {
        name: "Avalon",
        group: "Cities",
        className: 'city1',
        description: {
            faction: "Altmeners",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 5000,
            power: {
                value: 20000,
                soldiers: 1000
            },
            coordinates: {
                top: 490,
                left: 495
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 7000
                },
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 350
                },
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 200
                },
                {
                    name: "ferro",
                    eName: "iron",
                    qtd: 50
                }
            ]
        }
    },
    {
        name: "Azalarium",
        group: "Cities",
        className: 'city2',
        description: {
            faction: "Nisirianos",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 8000,
            power: {
                value: 20000,
                soldiers: 1000
            },
            coordinates: {
                top: 550,
                left: 130
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 7000
                },
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 350
                },
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 200
                },
                {
                    name: "ferro",
                    eName: "iron",
                    qtd: 50
                }
            ]
        }
    },
    {
        name: "Cormiles",
        group: "Cities",
        className: 'city3',
        description: {
            faction: "Germinianos",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 8000,
            power: {
                value: 20000,
                soldiers: 1000
            },
            coordinates: {
                top: 300,
                left: 310
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 7000
                },
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 350
                },
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 200
                },
                {
                    name: "ferro",
                    eName: "iron",
                    qtd: 50
                }
            ]
        }
    },
    {
        name: "Pântano",
        group: "Ruins",
        className: 'ruins2',
        description: {
            faction: "Altmeners",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 400,
            power: {
                value: 20000,
                soldiers: 10
            },
            coordinates: {
                top: 300,
                left: 310
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 7000
                },
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 350
                },
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 200
                },
                {
                    name: "ferro",
                    eName: "iron",
                    qtd: 50
                }
            ]
        }
    },
    {
        name: "Ruinas Skull",
        group: "Ruins",
        className: 'ruins1',
        description: {
            faction: "Altmeners",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 400,
            power: {
                value: 20000,
                soldiers: 10
            },
            coordinates: {
                top: 380,
                left: 270
            },
            production: [
                {
                    name: "comida",
                    eName: "food",
                    qtd: 450
                },
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 35
                }
            ]
        }
    },
    {
        name: "Minas Luthios",
        group: "Mines",
        className: 'cavern1',
        description: {
            faction: "Germinianos",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 400,
            power: {
                value: 20000,
                soldiers: 10
            },
            coordinates: {
                top: 180,
                left: 360
            },
            production: [
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 350
                },
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 200
                },
                {
                    name: "ferro",
                    eName: "iron",
                    qtd: 50
                }
            ]
        }
    },
    {
        name: "Holzfluss",
        group: "Florest",
        className: 'florest1',
        description: {
            faction: "Germinianos",
            level: 1
            ,
            price: 100000,
            treasure: 0,
            population: 30,
            power: {
                value: 20000,
                soldiers: 10
            },
            coordinates: {
                top: 285,
                left: 260
            },
            production: [
                {
                    name: "madeira",
                    eName: "wood",
                    qtd: 400
                }
            ]
        }
    },
    {
        name: "Pirâmides",
        group: "Especial",
        className: 'monument1',
        description: {
            faction: "Nisirianos",
            level: 3,
            price: 400000,
            treasure: 50000,
            population: 400,
            power: {
                value: 20000,
                soldiers: 10
            },
            coordinates: {
                top: 405,
                left: 110
            },
            production: [
                {
                    name: "pedra",
                    eName: "rock",
                    qtd: 250
                }
            ]
        }
    }
]