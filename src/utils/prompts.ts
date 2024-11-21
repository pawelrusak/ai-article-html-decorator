export function getArticleHTMLDecoratorPrompt(articleInput: string) {
  return `
  Description: 
  You will receive an original text that must remain unchanged. Your task is to transform it into a properly structured HTML web page.
  
  Original Text: ${articleInput}
  
  Instructions:
  1. Use appropriate HTML tags to structure the text, including semantic tags such as '<article>', '<section>', and '<header>'.
  2. Identify suitable places in the text to add images. At these locations:
    - Insert the following HTML structure: <figure> <img src="image_placeholder.jpg" alt="%ALT%" /> <figcaption>%DESCRIPTION%</figcaption> </figure>
    - Replace %ALT% with an AI prompt that describes what the image should depict. The value should be command-like and detailed (e.g., "Generate an image of a serene forest with sunlight streaming through the trees").
    - Replace %DESCRIPTION% with a caption that aligns with the AI command provided in the alt attribute.
  3. Ensure all '<img>' tags have 'src="image_placeholder.jpg"'.
  4. Wrap the transformed content entirely within the '<body>' tag. Do not include '<html>' or '<head>' tags.
  5. Return only the final HTML output as plain text. Do not wrap the response in any additional formatting such as markdown or code blocks (e.g., no triple backticks).
  6. Ensure the HTML is clean, valid, and easy to read.

  Do not include any additional comments or explanations—return only the plain HTML.
  `;
}
