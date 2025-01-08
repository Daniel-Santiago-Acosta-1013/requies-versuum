export interface Quote {
    text: string;
    author: string;
    source?: string;
}

export const quotes: Quote[] = [
    {
        text: "La poesía es el eco de la melodía del universo en el corazón de los humanos.",
        author: "Gabriela Mistral",
        source: "Desolación"
    },
    {
        text: "Las palabras son como monedas, que una vale por muchas como muchas no valen por una.",
        author: "Francisco de Quevedo"
    },
    {
        text: "La poesía es la música del alma.",
        author: "Voltaire"
    },
    {
        text: "La poesía debe ser hecha por todos, no por uno.",
        author: "César Vallejo"
    },
    {
        text: "Hay que escribir con sangre para que se aprenda que la sangre es espíritu.",
        author: "Jorge Luis Borges"
    }
];