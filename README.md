# PetBook
This capstone project is a simple pet organisation and schedule platform designed with user accesibility, affordability and stress free management of their furry friends in mind. The application was built utilising the MERN development framework (MongoDB, Express.js, React.js and Node.js). <br/><br/>


# Installation <br/>
## to run application without Docker
Pull code from GitHub

**backend installation**
- cd to backend folder and run npm install command
- in the backend folder, create a .env file and write MONGO_URI="your-uri-here". Replace your-uri-here with the uri to your MongoDb database
- still in  .env on the next line, add JWT_SECERET=any-phrase-here for authentication purposes
- npm start command to run backend

**frontend installation**
- cd to frontend folder and run npm install command
- frontend will run on default port 3000. If you would like to change it, modify the scripts part of the package.json file from "start": "react-scripts start" to "start": "set PORT='your-port' && react-scripts start" (Windows) or "start": "PORT='your-port' react-scripts start" (Linux and MacOs)
- run npm start

Once both backend and frontend have launched, open browser and open http://localhost OR http://localhost:port-you-chose if port was changed.

## to run both backend and front consecutively
- Pull code form Github
- cd into frontend folder and run npm run build commmand (will build latest optimised build to replace one that exists if any)
- copy and paste build folder into backend folder
- cd into backend and run npm start
- once launched, open browser and open http://localhost:backendPORT (default 5000)

NOTE: If you would like to use your own Mongodb database, make sure you replace the MONGO_URI in backend/.env folder with your own uri and JWT_SECRET with a value of your own before running npm start 

<br/><br/>

## to run application using Docker Compose
- pull code from GitHub
- online 31 of docker-compose.yml, replace MONGO_URI with the uri of your own MongoDB database you want to use
- Start Docker
- once Docker is running, run the docker-compose up --build command
- once docker images have built and containers start up, open your browser and go to http://localhost:port-number


If everything is up and running, homepage withh display. If it fails to display, it was not successful.
<br/><br/>


# Figma 

For Figma Design and Prototype, see:

https://www.figma.com/file/l4WlDx7f4g0stzTOU4oMOE/PetBook?node-id=5%3A2&t=O7JZxeiQ4HEaPgZM-1 <br/><br/>


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br/><br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<br/>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




