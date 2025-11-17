# ✨ InsightQuote: Minimalist Random Quote Generator



**InsightQuote** is a clean, minimalist web application built to deliver instant inspiration. It utilizes **Vanilla JavaScript** to select and display random quotes from a data array upon the user's interaction. This project focuses on demonstrating efficient DOM manipulation, array handling, and elegant CSS design.

## 🚀 Live Demo

Experience **InsightQuote** live!

[Live Demo](orioll.github.io/insightquote)

---

## 🎯 Key Features

* **Random Selection:** Efficient JavaScript logic (`Math.random()`) to select quotes from an internal data array of `{sentence: "", author: ""}` objects.
* **Efficient Interaction:** A single, simple **click event listener** attached to the document body or container triggers the quote update, minimizing DOM operations.
* **Focused Design:** High-contrast, centered design ensures maximum readability and highlights the quote using classic and modern typography.
* **Data Structure Practice:** Demonstrates clean data management using a **JavaScript Array of Objects**.

---

## 🛠️ Technologies & Styling

* **HTML5:** Core structure.
* **CSS3:** Minimalist styling using **CSS Variables** for a clean, maintainable color scheme.
* **JavaScript (Vanilla JS):** Core logic for data selection and DOM updating.

### Design Principles

| Aspect | Detail | Purpose |
| :--- | :--- | :--- |
| **Quote Font** | `Lora`, serif | Elegant, classic, and emphasizes the weight of the quote. |
| **Author Font** | `Source Sans Pro`, sans-serif | Clean, modern, and provides contrast to the quote text. |
| **Color Scheme** | High-contrast (Dark Gray on Light Gray) | Ensures high readability and a professional, calm aesthetic. |

---

## 🧠 How It Works (JavaScript Logic)

The core application logic is handled by two simple functions:

1.  **Data Structure:** A `const quotes = [...]` array holds the data.
2.  **`getRandomQuote()`:** Calculates a random index based on `quotes.length` and returns the selected object.
3.  **`showNewQuote()`:** Retrieves the random object and updates the `textContent` of the `blockquote` and the `p` author element in the DOM.

This ensures a fast, snappy, and efficient user experience.

---

*Project developed by Oriol Plazas*