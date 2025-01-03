# AI Article HTML Decorator

## Getting Started

Clone the project:

```bash
git clone https://github.com/pawelrusak/ai-article-html-decorator.git
```

Go to the project directory:

```bash
cd ai-article-html-decorator
```

Install dependencies:

```bash
npm ci
```

### Run Locally

After [installation](#installation), create a `.env` file:

```bash
cp .env.example .env
```

Open the [`.env`](.env) file and add your [API secret key to access the OpenAI API](https://platform.openai.com/api-keys) to the `OPENAI_API_KEY` variable:

```bash
OPENAI_API_KEY=<your_openai_key>
```

Generate the `artykul.html` file:

```bash
npm start
```

You can find the generated [`artykul.html`](./artykul.html) file in the [root](./) directory.

## Sample Article

The sample article generated by the app is saved in the [`artykul.html`](./artykul.html) file.

## Input File

You can find the input file used to generate the article in the [`src/assets/artykul.txt`](./src/assets/artykul.txt) file.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
