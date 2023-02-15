# Repository for the 13th prject of Openclassroom react front-end learning

im of this project is to :
- validate users authentication management using redux & API
- validate the construction of api's to answer specific needs

there is two repositories for this project
- backend, located to : https://github.com/olivierbussier/ocr_p13_bankApi_backend
- frontend, located to : https://github.com/olivierbussier/ocr_p13_BankApi_frontend

The api specifications will be done using swagger standart yaml file. This file
could be found on front end repository at : https://github.com/olivierbussier/ocr_p13_BankApi_frontend/blob/master/src/Services/API/swagger.yaml

## Back-end

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Regarding mondoDB, I personally use a docker container with docker's image `mongo:latest`. This image comes with mongo expres allowing database admin and browsing.

This image has been setup with the following dockerfile :
```
# Not use user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    volumes:
      - database:/data/db
#    environment:
#      MONGO_INITDB_ROOT_USERNAME: root
#      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
    - 27017:27017
    expose:
    - 27017

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
#      ME_CONFIG_MONGODB_ADMINUSERNAME: root
#      ME_CONFIG_MONGODB_ADMINPASSWORD: example
#      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
      ME_CONFIG_MONGODB_URL: mongodb://mongo:27017/

volumes:
  database:
```

### Instructions

The nodeJs server could be started using the command
"`npm run dev:server`"

In order to be operational, database must be populated with the command
"`npm run populate-db`"

Follow readme on the backend repository for more instructions

## Front-end
### Available Scripts

Standards scripts:
- `yarn start` : Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
- `yarn build` : Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
