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


## Tech stack used

- [NodeJS](https://nodejs.org/en/docs/)
- [ExpressJS](https://expressjs.com/en/4x/api.html)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Mysql2](https://www.npmjs.com/package/mysql2)


## Screenshots of The ToDo App

- When ToDo List is empty
![a](https://user-images.githubusercontent.com/32926581/55356865-59125e80-54e9-11e9-83c1-aede9b286b11.png)

- Enter all your Goals
![b](https://user-images.githubusercontent.com/32926581/55356920-76dfc380-54e9-11e9-8826-9b63d7682b24.png)

- Prioritize the goals using Up and Down buttons
![c](https://user-images.githubusercontent.com/32926581/55357002-a1ca1780-54e9-11e9-85dd-45c4d04f4102.png)

- Remove the goal from the ToDo list when it is accomplished
![d](https://user-images.githubusercontent.com/32926581/55357074-caeaa800-54e9-11e9-9b62-2d562cf06535.png)



