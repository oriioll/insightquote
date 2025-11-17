const quotes = [
    {
        sentence: "La mejor manera de predecir el futuro es crearlo.",
        author: "Peter Drucker"
    },
    {
        sentence: "La vida es aquello que te va sucediendo mientras te empeñas en hacer otros planes.",
        author: "John Lennon"
    },
    {
        sentence: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        author: "Robert Collier"
    },
    {
        sentence: "No te detengas hasta que te sientas orgulloso.",
        author: "Desconocido"
    },
    {
        sentence: "Sé el cambio que quieres ver en el mundo.",
        author: "Mahatma Gandhi"
    },
    {
        sentence: "El único modo de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        sentence: "Si puedes soñarlo, puedes lograrlo.",
        author: "Walt Disney"
    },
    {
        sentence: "La duda es a menudo tan traidora que nos hace perder el bien que podríamos ganar por miedo a intentarlo.",
        author: "William Shakespeare"
    },
    {
        sentence: "Donde la vida planta un árbol, no hay por qué temer.",
        author: "Pablo Neruda"
    },
    {
        sentence: "Nuestra mayor debilidad radica en renunciar. La forma más segura de tener éxito es intentarlo una vez más.",
        author: "Thomas A. Edison"
    }
];

function generateRandomQuote() {
    let size = quotes.length()
    let number = Math.floor(Math.random() * size)
    let sentence = quotes[number].sentence
    let author = quotes[number].author
}

document.getElementById('quoteContainer').addEventListener('click', () => {
    generateRandomQuote()
});