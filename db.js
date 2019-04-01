const Sequelize=require('sequelize');

const db = new Sequelize('tododb', 'todomanager', 'todopass', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
    }
})

const Task = db.define('tasks', {
    id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    taskName: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },
    isTaskCompleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
});

db.sync()
    .then(()=>console.log("DataBase has been Synced successfully"))
    .catch((err)=>console.log("Error Creating the Database"))

module.exports.Task=Task;

