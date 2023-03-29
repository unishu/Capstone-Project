# PetBook
This capstone project is a simple pet organisation and schedule platform designed with user accesibility, affordability and stress free management of their furry friends in mind. The application utilises the MERN development framework (MongoDB, Express.js, React.js and Node.js)

#How to run on your own system
SebMedia was designed from the ground up to be able to be downloaded and used by anyone. Here is details on how to get the frontend, backend, and tests to run on your system.

# Installation
Pull code from GitHub

# backend installation




Get everything (frontend, backend, and Redis) running via Docker Compose

Pull the code from GitHub
On line 28 of docker-compose.yml, remove the #
Replace MongoDB on line 28 with the uri for the MongoDB database you want to use
In the root directory, create a .env file
In line 1 of the .env file, write REDIS_STORE="store-directory-here" and replace store-directory-here with a folder path to be used for Redis cache store
In line 2 of the .env file, write UPLOAD_DIR="upload-dir-here" and replace upload-dir-here with a folder path to be used to store images that users upload
Start Docker
Once Docker has started, in the code directory, run the command docker-compose up --build
Once the docker images have built and the containers start up, open your browser and go to http://localhost
If everything was successful, a login page will show up.
If anything other than that happens, it was not successful.

Get everything (frontend, backend, Redis) running without Docker
This tutorial assumes you already have Redis installed and have it running on your system. If you don't, follow this guide: https://redis.io/docs/getting-started/

Pull the code from GitHub
In the backend folder, run the command npm install
In the frontend folder, run the command npm install
Go into the backend folder and create a new folder called uploads (this is where the images that users upload will be stored)
Still in the backend folder, create a .env file
In the 1st line, write MONGODB_URI="uri-here". Replace uri-here with the uri to your MongoDB database
In the 2nd line, write REDIS_URL="url-here". Replace url-here with the url to the Redis cache running on your system (if you are running Redis with default settings the url will be redis://127.0.0.1:6379)
In the backend folder, run the command npm start
In the frontend folder, also run the command npm start (may ask for administrator password as the react development server will run on port 80, and generally any port under 1024 needs administrator permissions. If you want to run this without your administrator password, go to package.json in the frontend folder and change the PORT=80 part in scripts.start and change 80 to the port you want to use)
Once both the backend and frontend have launched, open a browser and open http://localhost OR http://localhost:port-you-chose-here if you changed the port in step 9
If everything was successful, a login page will show up.
If anything other than that happens, it was not successful.

Installation Instructions Authenticity
Both Get everything (frontend, backend, and Redis) running via Docker Compose and Get everything (frontend, backend, Redis) running without Docker's instructions were followed on macOS 11 (Big Sur) and macOS 13 (Ventura) and everything worked as intended.