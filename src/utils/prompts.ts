export function getArticleHTMLDecoratorPrompt(articleInput: string) {
  return `
  Description: 
  You will receive an original text that must remain unchanged. Your task is to transform it into a properly structured HTML web page.
  
  Original Text: ${articleInput}
  
  Instructions:
  1. Use appropriate HTML tags to structure the text, including semantic tags such as '<article>', '<section>', and '<header>'.
  2. Identify suitable places in the text to add images. At these locations, insert the following HTML tag:
     '<img src="image_placeholder.jpg" alt="%ALT%" />'
     - Replace '%ALT%' with a meaningful description that can serve as a prompt for generating a matching image.
  3. Wrap the transformed content entirely within the '<body>' tag. Do not include '<html>' or '<head>' tags.
  4. Return only the final HTML output as plain text. Do not wrap the response in any additional formatting such as markdown or code blocks (e.g., no triple backticks).
  5. Ensure the HTML is clean, valid, and easy to read.
  
  Do not include any additional comments or explanations—return only the plain HTML.
  `;
}
