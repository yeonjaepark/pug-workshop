# Pug Workshop

[Pug](https://pugjs.org/), formerly known as Jade, is a preprocessor for HTML and a Node.js templating engine implemented with Javascript. It is the number one

## Instructions
To complete this workshop, follow the following steps:

1. [Fork the repository](#fork-the-repo)
2. [Install pug](#install-pug)
2. [Start a pug file](#start-a-pug-file)
3. [Serve your first project](#serving-your-project-on-a-browser)
4. [Spice up your website](#adding-a-theme)
5. [Make your first post](#make-your-first-post)
6. [Customize your Theme](#customize-a-theme)

Be sure to look out for the following notations:
* :computer: run in terminal
* :rocket: this is a key step
* :warning: watch out!
* :question: explanation section- what is going on here?
* :white_check_mark: checkpoint reached!

## Fork the Repo
:rocket: First, make sure to fork [this](http://...) repo and clone it to your computer so we can get started!


## Install Pug
Then, in your new repository, install Pug. We will be working with [Pug's CLI interface](https://www.npmjs.com/package/pug-cli) so that we can run the files without a server.
:computer:
```
npm install pug-cli -g
```
This installs the package globally so the node-modules file is no longer needed.

## Start a Pug File
We will be working in a .pug file, so let's create the file in templates.
:computer:
```
touch index.pug
atom index.pug
```
One of the main advantages of using Pug is that the syntax is very clean and simple. Rather than dealing with the XML styling of HTML with all the tags, we can simply write p or h1 to specify how to format the content.

Let's start with a very simple Hello World!

:rocket: Start with the beginning header to the pug file. It is like an html file, but simpler (no closing tags are needed).
```
doctype html
html
  head
  body
```

Now, you can add in Hello World to your body!

:rocket:
```
h1 Hello world!
```

## Serving your project on a browser
With the new pug file, we can now render it into an HTML file and host it locally to see our work so far. It is very simple to render our pug file into an HTML file.
:computer:
```
pug -P -w index.pug
```
The -P tag will format the HTML file to include whitespaces while the -w tag allows for automatic re-rendering every time you update your index.pug file.

:computer:
Then, to host it locally, paste the line that we have been using.
```
python -m SimpleHTTPServer 9000
```



1. Build simple Hello world! in the body
2. Change Hello World! to main div and a callout (assumes things are divs if you don’t specify) (create a div called callout) (img, h1, p)
3. Run pug -P -w templates/index.pug
4. create footer with list (ul)
5.  add nav bar (include nav.pug) see how you can pull in other templates. add in an image to the nav bar before the ul
6. spice up callout (add if else statement)
7. build sitemap with
8. run pug -P -w options.js tempaltes/index.pug
9. change variables in js (from false to true for happy and other list variables)
10. link stylesheet and voila!

:rocket:


In order to run this, run `pug -O options.js templates/landing.pug`.
