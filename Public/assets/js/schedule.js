$(document).ready( () => {


    startMeal();

    async function startMeal() {
        var id;
        await $.get("/api/user_data").then((data) => {
            var thisId = data.id
            console.log(thisId)
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

    // $(".view-button").on("click", function(event) {
    //     console.log("hi")
    //     var test = this.val()
    //     console.log("hi")
    //     console.log(test)
    //     console.log(this.value);
    // })



    const renderScheduleMeals = (day, time, id) => {
        $.get("/api/meal/" + day + "/" + time + "/" + id).then( data => {
            console.log(data)
            for (i = 0; i < data.length; i++) {
                var pText = $("<p></p>")
                var deleteButton = $("<button></button>");
                var viewButton = $("<button></button>");
                deleteButton.text("delete");

                deleteButton.addClass("delete-button btn btn-primary");
                viewButton.text("View Recipe");
                viewButton.addClass("view-button btn btn-primary");

                viewButton.attr("value", data[i].id);
                deleteButton.attr("value", data[i].id);   

                // viewButton.attr("type", "button");
                // deleteButton.attr("type", "button");  

                pText.text(data[i].recipeTitle);
                // pText.append(viewButton);
                // pText.append(deleteButton);
                // $("Monday-Breakfast").append(whichRecipe)
                $("." + day + "-" + time).append(pText);
                $("." + day + "-" + time).append(viewButton);
                $("." + day + "-" + time).append(deleteButton);
                    
            }
        });

    }

    var renderMeal = (indexNum, data) => {
        let instructP = $("<p>");
        let ingredients = JSON.parse(data[indexNum].recipeIngredients);
        let instructions = JSON.parse(data[indexNum].recipeInstructions);
        listIngredients(ingredients);
        instructP.text(instructions[0].steps);
        $(".meal-text").html("&nbsp;" + data[indexNum].recipeTitle);
        $(".chef-name").text("Chef: " + data[indexNum].mealChef);
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
        var test = this.val()
        console.log("hi")
        console.log(test)
        console.log(this.value);
    });

    (".delete-button").on("click", function(event) {
        console.log("maybe")
    });

});