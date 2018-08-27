# <react-boilerplate \/>
> This boilerplate consists of applying the simple React architecture for you business.

  
### Starting

Install dependencies:

```shel
npm install
```

Run this project:

```shel
npm run start
```
Go to: http://localhost:8080/
  

### Project structure

- **src/components**: Components of React to be shared and reused in the project;
- **src/containers**: Page components that apply business knowledge and present themselves as pages;
- **src/providers**: Implementation of APIs that communicate with backend;
- **src/store**: State configuration with Redux;
- **src/core**: Utilities, constants, assets, configurations, i18n and others.
- **stub**: Routes of mock backend API`s.
- **storybook**: Storybook configuration (The stories writing in components folder).


## Linter

Use [eslint](https://eslint.org/) with Airbnb extension.

  

## Testing

**Unit**: the unit tests are intended to test parts of our project, and use [Jest](https://jestjs.io/).

  

## Components documentation

Run the command storybook and view components using [Storybook](https://github.com/storybooks/storybook/)

  

## Libs

- Redux: https://redux.js.org/
- Redux-Saga: https://github.com/redux-saga/redux-saga
- Lodash: https://lodash.com/

  
## Scripts

```javascript
//Start webpack in development mode
"start": "webpack-dev-server",

//Build this product for production
"build": "webpack --config webpack.config --mode production",

//Run unit test
"test": "jest",

//Run unit test in watch mode
"test:watch": "jest --watch",

//Run unit test and show coverage report
"test:coverage": "jest --coverage",

//Run mock server
"stub": "nodemon stub --exec babel-node --no-babelrc --presets=@babel/preset-env",

//Run storybook for showing components documentation
"storybook": "start-storybook -p 6006",
```
