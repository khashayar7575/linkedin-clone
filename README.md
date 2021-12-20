This project is Linkedin clone using Reactjs, Redux, Firebase. Its personal project for my portfolio.

## Before start

Create file in path **src/firebaseConfig.js** with the following content. change values with your own firebase config.
```javascript
const firebaseConfig = {
  apiKey: "[apiKey]",
  authDomain: "[authDomain]",
  projectId: "[projectId]",
  storageBucket: "[storageBucket]",
  messagingSenderId: "[messagingSenderId]",
  appId: "[appId]",
};

export default firebaseConfig;
 ```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
