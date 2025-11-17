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
    },
    {
        sentence: "Haz lo que puedas, con lo que tengas, donde estés.",
        author: "Theodore Roosevelt"
    },
    {
        sentence: "La imaginación es más importante que el conocimiento.",
        author: "Albert Einstein"
    },
    {
        sentence: "No cuentes los días, haz que los días cuenten.",
        author: "Muhammad Ali"
    },
    {
        sentence: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez con más inteligencia.",
        author: "Henry Ford"
    },
    {
        sentence: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        author: "Nelson Mandela"
    },
    {
        sentence: "No esperes. El tiempo nunca será justo.",
        author: "Napoleon Hill"
    },
    {
        sentence: "La felicidad no es algo hecho. Proviene de tus propias acciones.",
        author: "Dalai Lama"
    },
    {
        sentence: "No hay caminos para la paz; la paz es el camino.",
        author: "Mahatma Gandhi"
    },
    {
        sentence: "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        author: "Franklin D. Roosevelt"
    },
    {
        sentence: "Cree que puedes y ya estás a mitad de camino.",
        author: "Theodore Roosevelt"
    },
    {
        sentence: "La disciplina es el puente entre metas y logros.",
        author: "Jim Rohn"
    },
    {
        sentence: "Nunca es demasiado tarde para ser lo que podrías haber sido.",
        author: "George Eliot"
    },
    {
        sentence: "El conocimiento habla, pero la sabiduría escucha.",
        author: "Jimi Hendrix"
    },
    {
        sentence: "La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.",
        author: "Walter Elliot"
    },
    {
        sentence: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        author: "Albert Schweitzer"
    },
    {
        sentence: "No hay viento favorable para el que no sabe a dónde va.",
        author: "Séneca"
    },
    {
        sentence: "La libertad no es nada más que una oportunidad para ser mejor.",
        author: "Albert Camus"
    },
    {
        sentence: "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos.",
        author: "Michael Jordan"
    },
    {
        sentence: "La creatividad es inteligencia divirtiéndose.",
        author: "Albert Einstein"
    },
    {
        sentence: "El que tiene un porqué para vivir puede soportar casi cualquier cómo.",
        author: "Friedrich Nietzsche"
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