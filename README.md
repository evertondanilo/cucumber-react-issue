## How to run and get the error

```
npm ci
npm run cucumber:coverage
```

Version that breaks C8: (package.json)  
```npm i @babel/core@7.21.0 --save-dev``` ,(and any version after that)


Working version with C8:  
```npm i @babel/core@7.20.12 --save-dev```



## This repo was create to show the error about Invalid Path

Looks like that latest ```@babel/core``` versions doesn't work well with ```C8```.  
The path is being appended twice.

```
Error: Path contains invalid characters: C:\code\repo\FR.Web.front\frontApp\coverage_cucumber\lcov-report\frontApp\Features\StepDefinitions\C:\code\repo\FR.Web.front\frontApp\Features\StepDefinitions
    at checkPath (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\make-dir\index.js:16:18)
    at AsyncFunction.module.exports.sync (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\make-dir\index.js:108:2)
    at FileWriter.writeFile (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-lib-report\lib\file-writer.js:184:16)
    at HtmlReport.onSummary (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-reports\lib\html\index.js:364:44)
    at LcovReport.<computed> [as onSummary] (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-reports\lib\lcov\index.js:28:23)
    at Visitor.value (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-lib-report\lib\tree.js:38:38)
    at ReportNode.visit (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-lib-report\lib\tree.js:86:21)
    at C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-lib-report\lib\tree.js:92:19
    at Array.forEach (<anonymous>)
    at ReportNode.visit (C:\code\repo\FR.Web.front\frontApp\node_modules\c8\node_modules\istanbul-lib-report\lib\tree.js:91:28)
```


## Getting Started with Create React App
Default reame from a CRA app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
