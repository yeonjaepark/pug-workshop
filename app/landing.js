// pug.js
import pug from 'pug';

// Compile the source code
const compiledFunction = pug.compileFile('templates/landing.pug');

export const buildLanding = (name) => {
  return compiledFunction({ name });
};
