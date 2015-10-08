# Boilerplate for Meteor, Typescript, React, Webpack

### About

Get started with Typescript, React and Meteor quickly, using Webpack.
This boilerplate also sets up Bootstrap, Font-Awesome and makes use of the build-in Meteor User-System Templates.

Here are some arguments, why you might consider this stack for larger code bases:
https://docs.google.com/presentation/d/1XB6lYXLjKFADEYdexXDI8Wqvll55LOhcEw2layqNI5Q


### Prerequisites

git, npm, meteor


### Usage 1) Get the code

``` bash
git clone git@github.com:julius/boilerplate-webpack-typescript-react-meteor.git
cd boilerplate-webpack-typescript-react-meteor && npm i
```

### Usage 2) Run the code in development mode

``` bash
npm run dev
```

Open this up in your browser:
[http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html)

Code is in the **src** folder.
Browser will refresh automatically when you change code.


### Usage 3) Build the code for production use

``` bash
npm run build
```

Look into the **dist** folder.
There should be something you can deploy to your Meteor server.


### How this works

Webpacks compiles **src/client/index.ts** and **src/server/index.ts**.
Puts everything in a Meteor folder **webpack-meteor/meteor-dist** and lets Meteor run.

Webpack watches and recompiles when you change code.
Webpack-Config-Files are here: **webpack-meteor/webpack-config**


### Sidenotes

**No JSX**
As of TypeScript 1.6, the tag-notation of JSX for React is supported.
It is not used here, because some IDEs do not support TSX yet.

To get it: Simply use .tsx-files instead of .ts-files.


### License

MIT (http://www.opensource.org/licenses/mit-license.php)