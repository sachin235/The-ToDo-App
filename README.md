# The-ToDo-App

A full feature To Do App to keep track of goals of life


## HOW TO RUN

- Download ZIP or Clone the repository
- Navigate to the directory
- Open Terminal and type `npm install` to install all the dependencies
- Run the following commands  to create database and grant privileges:
- - sudo service mysql start
- - sudo mysql -u root -p
- - create database tododb;
- - create user todomanager identified by 'todopass';
- - use tododb;
- - grant all privileges on tododb to todomanager;
- - grant all privileges on tododb.* to todomanager;

- Then run server.js to start the server
- Open `localhost:4000` in the browser to go to the index page


### Tech stack used

- [NodeJS](https://nodejs.org/en/docs/)
- [ExpressJS](https://expressjs.com/en/4x/api.html)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Mysql2](https://www.npmjs.com/package/mysql2)

