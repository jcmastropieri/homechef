$(document).ready( () => {


    startMeal();

    async function startMeal() {
        var id;
        await $.get("/api/user_data").then((data) => {
            var thisId = data.id
            $.get("/api/users").then( results => {
                console.log("this is apiusers results")
                console.log(results)
                for (i = 0; i < results.length; i ++) {
                    if (results[i].id === thisId) {
                        console.log(results[i].id + "break" + thisId)
                        id = results[i].TeamId
                        console.log("this is id");
                        console.log(id)
                    }
                }

           
                renderScheduleMeals("Monday", "Breakfast", id);
                renderScheduleMeals("Monday", "Lunch", id);
                renderScheduleMeals("Monday", "Dinner", id);

                renderScheduleMeals("Tuesday", "Breakfast", id);
                renderScheduleMeals("Tuesday", "Lunch", id);
                renderScheduleMeals("Tuesday", "Dinner", id);

                renderScheduleMeals("Wednesday", "Breakfast", id);
                renderScheduleMeals("Wednesday", "Lunch", id);
                renderScheduleMeals("Wednesday", "Dinner", id);

                renderScheduleMeals("Thursday", "Breakfast", id);
                renderScheduleMeals("Thursday", "Lunch", id);
                renderScheduleMeals("Thursday", "Dinner", id);

                renderScheduleMeals("Friday", "Breakfast", id);
                renderScheduleMeals("Friday", "Lunch", id);
                renderScheduleMeals("Friday", "Dinner", id);

                renderScheduleMeals("Saturday", "Breakfast", id);
                renderScheduleMeals("Saturday", "Lunch", id);
                renderScheduleMeals("Saturday", "Dinner", id);

                renderScheduleMeals("Sunday", "Breakfast", id);
                renderScheduleMeals("Sunday", "Lunch", id);
                renderScheduleMeals("Sunday", "Dinner", id);
           
            });
        });
    }



    const renderScheduleMeals = (day, time, id) => {
        $.get("/api/meal/" + day + "/" + time + "/" + id).then( data => {
            console.log(data)

            for (i = 0; i < data.length; i++) {

                let newDiv = $("<div></div>").addClass("more-space")
                let pText = $("<p></p>").text(data[i].recipeTitle)
                pText.addClass("get-together")
                console.log(pText)
                
                let deleteButton = $("<button></button>");
                let viewButton = $("<button></button>");
                
                deleteButton.text("delete");
                deleteButton.addClass("delete-button btn btn-primary ingredBtn");

                viewButton.text("View Recipe");
                viewButton.addClass("view-button btn btn-primary ingredBtn");

                viewButton.attr("value", data[i].id);
                deleteButton.attr("value", data[i].id);   

                newDiv.append(pText);
                newDiv.append(viewButton);
                newDiv.append(deleteButton);
            
                $("." + day + "-" + time).append(newDiv);
                // $("." + day + "-" + time).append(viewButton);
                // $("." + day + "-" + time).append(deleteButton);
                    
            }
        });

    }

    var renderViewMeal = (data) => {
        let instructP = $("<p>");
        let ingredients = JSON.parse(data[0].recipeIngredients);
        let instructions = JSON.parse(data[0].recipeInstructions);
        listIngredients(ingredients);
        instructP.text(instructions[0].steps);
        $(".meal-text").html("&nbsp;" + data[0].recipeTitle);
        $(".chef-name").text("Chef: " + data[0].mealChef);
        $(".instructions-list").html(instructP)
    
    }
    
    function listIngredients(takenList) {
        let ingredsP = $("<p>");
        // var useArray = takenList.split(",");
        var newUL = $("<ul>");
        for (i = 0; i < takenList.length; i++) {
            var newListItem = $("<li>").text(takenList[i]);
            newUL.append(newListItem);
        }
        ingredsP.append(newUL);
        $(".ingredients-list").html(ingredsP);
    };

    $(document).on("click", ".view-button", function(event) {
        console.log("hi")
        var user = this.value
        console.log(user)
        $.get("/api/meal/schedule/" + user).then( data => {
            console.log(data)
            renderViewMeal(data);

        })
    });

    $(document).on("click", ".delete-button", function(event) {
        console.log("bye")
        var user = this.value
        console.log("second run")
        console.log(user)
        $.ajax("/api/cats/schedule" + user, {
            type: "DELETE"
          }).then(function() {
              console.log("deleted meal" + user);
              location.reload();
            }
          );
        
    });

   

});