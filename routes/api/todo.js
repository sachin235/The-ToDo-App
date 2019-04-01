
const task=require('../../db').Task;
const route=require('express').Router();

route.get('/',function(req,res){
     task.findAll()
        .then((task) => {
            res.status(200).send(task)
        })
        .catch((err) =>{
           res.status(500).send({
               error:"could not retrieve the tasks"
           });
        });

});

route.post('/',(req,res)=>{
    //create a new task
    task.create({
        taskName: req.body.goal
    }).then((task)=>{
        var response={};
        response.taskName=task.taskName;
        res.status(201).send(response);
    }).catch((err)=>{
        res.status(501).send({
            error:"could not save the new task"
        });

    })
});

route.post('/removegoal/:id',(req,res)=>{
    task.destroy({
        where: { taskName: req.params.id }
    }).then(task => {
            res.sendStatus(201).send(task);
    }).catch((err)=>{
        res.sendStatus(501).send({
            error:"could not Delete The Goal"
        });
    })
})


module.exports.route=route;