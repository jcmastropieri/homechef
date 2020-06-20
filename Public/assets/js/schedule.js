$(document).ready( () => {

console.log("connected");

startMeal();

async function startMeal() {
    var id;
    console.log("running?");
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

            console.log(id)
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
                    //will need to make delete button here
                    //maybe do an if statement in recipes where if no mealchoice, ask for meal choice name"
                var whichRecipe = $("<button></button>")
                whichRecipe.text(data[i].recipeTitle)
                console.log(day + "break" + time)
                $("Monday-Breakfast").append(whichRecipe)
                $("." + day + "-" + time).append(whichRecipe);
                    
            }
        });

    }

});