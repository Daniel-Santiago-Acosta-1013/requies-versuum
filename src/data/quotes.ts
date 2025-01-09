export interface Quote {
    text: string;
    author: string;
    source?: string;
}

export const quotes: Quote[] = [
    // Edgar Allan Poe
    {
        text: "Quiero tal vez porque soy débil, que no puedo vivir sin ti.",
        author: "Edgar Allan Poe",
        source: "Annabel Lee"
    },
    {
        text: "Todos los que vemos o parecemos es sólo un sueño dentro de un sueño.",
        author: "Edgar Allan Poe",
        source: "A Dream Within a Dream"
    },

    // Jorge Luis Borges
    {
        text: "He cometido el peor pecado que uno puede cometer. No he sido feliz.",
        author: "Jorge Luis Borges",
        source: "El hacedor"
    },
    {
        text: "Siempre imaginé que el Paraíso será algún tipo de biblioteca.",
        author: "Jorge Luis Borges",
        source: "El hacedor"
    },

    // Albert Camus
    {
        text: "En medio del invierno, aprendí por fin que en mi interior habitaba un verano invencible.",
        author: "Albert Camus",
        source: "L'Été"
    },
    {
        text: "La libertad no es nada más que una oportunidad para ser mejor.",
        author: "Albert Camus",
        source: "El hombre rebelde"
    },

    // Epicteto
    {
        text: "No son las cosas las que nos perturban, sino las opiniones que tenemos de ellas.",
        author: "Epicteto",
        source: "Enchiridion"
    },
    {
        text: "La felicidad y la libertad comienzan con una clara comprensión de un principio: algunas cosas están bajo nuestro control y otras no.",
        author: "Epicteto",
        source: "Discursos"
    },

    // Mario Mendoza
    {
        text: "La soledad no es ausencia de amor, sino ausencia de empatía.",
        author: "Mario Mendoza",
        source: "Baires"
    },
    {
        text: "En este mundo nada es tan terrible como la indiferencia.",
        author: "Mario Mendoza",
        source: "Río abajo"
    },

    // H.P. Lovecraft
    {
        text: "El horror no viene de la noche, sino del ocaso del mundo.",
        author: "H.P. Lovecraft",
        source: "At the Mountains of Madness"
    },
    {
        text: "La ciencia todavía no ha descubierto el miedo.",
        author: "H.P. Lovecraft",
        source: "The Shadow over Innsmouth"
    },

    // Gabriel García Márquez
    {
        text: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
        author: "Gabriel García Márquez",
        source: "Vivir para contarla"
    },
    {
        text: "No llores porque ya se terminó, sonríe porque sucedió.",
        author: "Gabriel García Márquez",
        source: "Entrevista"
    },

    // Julio Cortázar
    {
        text: "Nada tiene sentido si no estás.",
        author: "Julio Cortázar",
        source: "Rayuela"
    },
    {
        text: "La verdadera pregunta no es si hay vida inteligente en otros lugares, sino si yo soy inteligente en mi propia vida.",
        author: "Julio Cortázar",
        source: "Final del juego"
    }
];
