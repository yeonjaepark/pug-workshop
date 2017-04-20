// pug.js
import pug from 'pug';

// Compile the source code
const compiledFunction = pug.compileFile('templates/test.pug');

export const buildTemplate = (name) => {
  return compiledFunction({ name });
};
