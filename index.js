require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

// Funkcja do wysyłania zapytania do OpenAI API
async function sendToOpenAI(articleContent) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `Here is an article:\n\n${articleContent}\n\n Please structure the content using appropriate HTML tags (e.g., <header>, <section>, <h1>, <h2>, <p>, etc.) **WITHOUT CHANGING , REDUCING, CUTTING or ALTERING THE ORIGINAL TEXT  CONTENT IN ANY WAY!!!  The text must remain completely unmodified.** Follow these specific guidelines for structuring and enhancing the content:
- The main title (<h1>) should be centered on the page.
   - Subheadings (<h2- **Main title** (<h1>) should be centered.
- **Subheadings** (<h2>) must be indented  4 spaces from the left margin!
- Each paragraph and section should start with an indented first line!
- **Content** should be wrapped to 50% of the page width!

- Insert a relevant image immediately after the main title using:  
  \`<img src="image_placeholder.jpg" alt="An image representing the article title. Prompt: 'prompt for generating the image'">\`.
- For each subsection, add images that illustrate the content without distracting from it. Use \`<img>\` tags with descriptive \`alt\` attributes and prompts, such as:  
  \`"Illustration of [topic], showing [details]. Prompt: 'prompt for generating this image'"\`.
- Add captions for each image using \`<figcaption>\` tags, with descriptions **in Polish** explaining the image's relevance.
- Place a final image after the conclusion/summary with a Polish caption.

- **Do not include** any CSS or JavaScript code. Only generate content to be placed within \`<body>\` tags.`

                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('\nBłąd wysyłania zapytania do OpenAI:', error.response ? error.response.data : error.message);
        return null;
    }
}
async function readArticle(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('\nBłąd wczytywania pliku:', err);
        return null;
    }
}
async function saveToHTML(content) {
    try {
        await fs.writeFile('./assets/artykul.html', content, 'utf8');
        console.log('\nPomyślnie zapisano wynik do artykul.html');
    } catch (err) {
        console.error('\nBłąd zapisu pliku:', err);
    }
}
async function processArticle(filePath) {
    const article = await readArticle(filePath);
    if (!article) {
        console.log('\nBrak artykułu do wczytania');
        return;
    }

    const htmlContent = await sendToOpenAI(article);
    if (htmlContent) {
        await saveToHTML(htmlContent);
    } else {
        console.log('Nieudany zapis do pliku');
    }
}
const filePath = './Zadanie dla JJunior AI Developera - tresc artykulu.txt';
processArticle(filePath);