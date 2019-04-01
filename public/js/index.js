$(document).ready(function() {
   var goal;
   var ul;

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: '/api/todo',
        success: function (serverData) {
            displayNoGoalMsg();
            if(serverData.length>0){
                displayAllGoalMsg();
                createUlContainer();
                for(var i=0;i<serverData.length;i++){
                    createListItem(serverData[i].taskName);
                }
            }
        },
        error: function () {
            console.log("Get Request to fetch all goals did not work");
        }
    });

    function createUlContainer(){
        ul = $('<ul></ul>')
        ul.addClass('ulContainer');
        $(".goal-container").append(ul);

    }

    function displayNoGoalMsg(){
        var heading=$('<h1></h1>').text("No Goals in Life...  It's a Shame");
        heading.css({'margin-left':'33%'});
        $(".goal-container").append(heading);
    }

    function displayAllGoalMsg(){
        var text=$(".goal-container").find('h1').text('My Goals in Life Are');
        text.css({'margin-left':'36%'});
    }

   function createListItem(goal){
       var li=$('<li></li>');
       var span=$('<span></span>').text(goal);
       li.addClass('listItem');
       li.append(span);
       createThreeButtons(li);
       ul.append(li);


   }

   function createThreeButtons(li){

       var buttonsContainer=$('<div></div>');
       buttonsContainer.addClass('buttonsContainer');

       var upButton=$('<button></button>').text('Up');
       var downButton=$('<button></button>').text('Down');
       var removeButton=$('<button></button>').text('Remove');

       upButton.addClass('upButton');
       downButton.addClass('downButton');
       removeButton.addClass('removeButton');

       buttonsContainer.append(upButton);
       buttonsContainer.append(downButton);
       buttonsContainer.append(removeButton);

       li.append(buttonsContainer);





   }

    $("body").on('click','.removeButton',function(event){
       var goalName= $(event.target.parentNode.parentNode).find('span').text();
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/api/todo/removegoal/'+ goalName,
            success: function(serverData) {
                $(event.target).parentsUntil('ul').remove();
                if($('.ulContainer').find('li').length===0){
                    $('.ulContainer').remove();
                    if($(".goal-container").has('h1')) {
                        $(".goal-container").find('h1').text('No Goals in Life...  It\'s a Shame');
                        $(".goal-container").find('h1').css({'margin-left':'35%'})
                    }

                }
            },
            error:function(){
                console.log("Post request to save did not worked");
            }
        });

    });

    $("body").on('click','.upButton',function(){
     var currentli=$(event.target).parent().parent();
     var prevli=currentli.prev();

     if(prevli){
         currentli.insertBefore(prevli);
     }

    });

    $("body").on('click','.downButton',function(){
        var currentli=$(event.target).parent().parent();
        var nextli=currentli.next();

        if(nextli){
            nextli.insertBefore(currentli);
        }
    });


    $("#add-goal-button").on('click',function(){
        var data = {};
        data.goal = $("#input-goal").val();
        console.log(data);
        console.log(JSON.stringify(data));
        if(data.goal.length>0){
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/api/todo',
                success: function(serverData) {
                  // console.log(serverData.taskName);
                   displayAddedGoal(serverData.taskName);
                },
                error:function(){
                    console.log("Post request to save did not worked");
                }
            });
        }else{
            alert("Please enter a valid goal");
        }

    });

    var displayAddedGoal=function(goal){
        if ($(".goal-container").find('ul').length!=0) {
            createListItem(goal);
        } else {
          displayAllGoalMsg();
          createUlContainer();
          createListItem(goal);
        }
        $("#input-goal").val('');
    }

});





