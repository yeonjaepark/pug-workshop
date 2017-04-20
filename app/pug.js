// pug.js
import pug from 'pug';

// Compile the source code
const compiledFunction = pug.compileFile('templates/test.pug');

export const buildTemplate = (name) => {
  return compiledFunction({ name });
};

const articles = [
  {
    title: 'Article 1',
    author: 'Danielle',
    text: 'blah',
  },
  {
    title: 'Article 2',
    author: 'Midulla',
    text: 'bar',
  },
];

const articleCompileFunction = pug.compileFile('templates/article.pug');
const homeCompileFunction = pug.compileFile('templates/home.pug');
const htmlArticles = articles.map((article) => {
  return articleCompileFunction(article);
});

export const buildHomepage = () => {
  return homeCompileFunction({ articles: htmlArticles });
};
