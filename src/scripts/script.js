//generate object array with sentence and author
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
    //Pick array size and generate a random number from 0 until size
    let size = quotes.length
    let number = Math.floor(Math.random() * size)
    //Save the object sentence from the array and the index generated
    let sentence = quotes[number].sentence
    //Save the object author from the array and the index generated
    let author = quotes[number].author

    //Show both sentence and author with textContent in the html blockquote and p
    document.getElementById('sentence').textContent = sentence
    document.getElementById('author').textContent = `-${author}`
}

document.getElementById('quoteContainer').addEventListener('click', () => {
    generateRandomQuote()
});