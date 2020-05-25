
var recipeTitle = "";
var recipeIngredients = "";
var recipeInstructions = "";
var mealInput = "";
var newChef = "";


$(".mealBtn").on("click", function(event) {

    event.preventDefault();
   

    mealInput = $(".inputMeal").val()

    console.log(mealInput);
    localStorage.setItem("Meal choice", mealInput)
    


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com/?p=1&q=" + mealInput,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var results = JSON.parse(response);
        for (i = 0; i < results.results.length; i++ ) {
            var newP = $("<p>");
            var link = $("<a>");
            var newRecp = results.results[i].href
            link.attr("href", newRecp)
            link.attr("target", "_blank")
            link.text(newRecp);
            newP.html(link);
            $(".recipes").prepend(newP);
        }
    });



});

$(".urlBtn").on("click", function(event) {
    event.preventDefault();
    var submittedURL = $(".inputURL").val()

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
            "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c",
            "content-type": "text/plain",
            "accept": "text/plain"
        },
        "data": submittedURL
    }
    
    $.ajax(settings).done(function (response) {

        recipeTitle = response[0].name
        recipeIngredients = response[0].ingredients
        recipeInstructions = JSON.stringify(response[0].instructions)

        
    });


    $('#optionsModal').modal({
        show: true
    });

});






//The save changes button in the modal
$("#saveBtn").on("click", function(event) {
    event.preventDefault();
    var newDay = $("#daySelector").val();
    var newMeal = $("#mealSelector").val();
    newChef = $("#chefSelector").val();



    //If/then statements for modal options

    if (newDay === "Monday" && newMeal === "Breakfast") {
        localStorage.setItem("MondayBreakfast", recipeTitle);
        localStorage.setItem("MondayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("MondayBreakfastInstructions", recipeInstructions)
        localStorage.setItem("MondayBreakfastMealChoice", mealInput)
        localStorage.setItem("MondayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Monday" && newMeal === "Lunch") {
        localStorage.setItem("MondayLunch", recipeTitle);
        localStorage.setItem("MondayLunchIngredients", recipeIngredients);
        localStorage.setItem("MondayLunchInstructions", recipeInstructions);
        localStorage.setItem("MondayLunchMealChoice", mealInput)
        localStorage.setItem("MondayLunchChefChoice", newChef)
    }
    else if (newDay === "Monday" && newMeal === "Dinner") {
        localStorage.setItem("MondayDinner", recipeTitle);
        localStorage.setItem("MondayDinnerIngredients", recipeIngredients);
        localStorage.setItem("MondayDinnerInstructions", recipeInstructions);
        localStorage.setItem("MondayDinnerMealChoice", mealInput)
        localStorage.setItem("MondayDinnerChefChoice", newChef)
    }
    else if (newDay === "Tuesday" && newMeal === "Breakfast") {
        localStorage.setItem("TuesdayBreakfast", recipeTitle);
        localStorage.setItem("TuesdayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("TuesdayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("TuesdayBreakfastMealChoice", mealInput)
        localStorage.setItem("TuesdayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Tuesday" && newMeal === "Lunch") {
        localStorage.setItem("TuesdayLunch", recipeTitle);
        localStorage.setItem("TuesdayLunchIngredients", recipeIngredients);
        localStorage.setItem("TuesdayLunchInstructions", recipeInstructions);
        localStorage.setItem("TuesdayLunchMealChoice", mealInput)
        localStorage.setItem("TuesdayLunchChefChoice", newChef)
    }
    else if (newDay === "Tuesday" && newMeal === "Dinner") {
        localStorage.setItem("TuesdayDinner", recipeTitle);
        localStorage.setItem("TuesdayDinnerIngredients", recipeIngredients);
        localStorage.setItem("TuesdayDinnerInstructions", recipeInstructions);
        localStorage.setItem("TuesdayDinnerMealChoice", mealInput)
        localStorage.setItem("TuesdayDinnerChefChoice", newChef)
    }
    else if (newDay === "Wednesday" && newMeal === "Breakfast") {
        localStorage.setItem("WednesdayBreakfast", recipeTitle);
        localStorage.setItem("WednesdayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("WednesdayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("WednesdayBreakfastMealChoice", mealInput)
        localStorage.setItem("WednesdayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Wednesday" && newMeal === "Lunch") {
        localStorage.setItem("WednesdayLunch", recipeTitle);
        localStorage.setItem("WednesdayLunchIngredients", recipeIngredients);
        localStorage.setItem("WednesdayLunchInstructions", recipeInstructions);
        localStorage.setItem("WednesdayLunchMealChoice", mealInput)
        localStorage.setItem("WednesdayLunchChefChoice", newChef)
    }
    else if (newDay === "Wednesday" && newMeal === "Dinner") {
        localStorage.setItem("WednesdayDinner", recipeTitle);
        localStorage.setItem("WednesdayDinnerIngredients", recipeIngredients);
        localStorage.setItem("WednesdayDinnerInstructions", recipeInstructions);
        localStorage.setItem("WednesdayDinnerMealChoice", mealInput)
        localStorage.setItem("WednesdayDinnerChefChoice", newChef)
    }
    else if (newDay === "Thursday" && newMeal === "Breakfast") {
        localStorage.setItem("ThursdayBreakfast", recipeTitle);
        localStorage.setItem("ThursdayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("ThursdayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("ThursdayBreakfastMealChoice", mealInput)
        localStorage.setItem("ThursdayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Thursday" && newMeal === "Lunch") {
        localStorage.setItem("ThursdayLunch", recipeTitle);
        localStorage.setItem("ThursdayLunchIngredients", recipeIngredients);
        localStorage.setItem("ThursdayLunchInstructions", recipeInstructions);
        localStorage.setItem("ThursdayLunchMealChoice", mealInput)
        localStorage.setItem("ThursdayLunchChefChoice", newChef)
    }
    else if (newDay === "Thursday" && newMeal === "Dinner") {
        localStorage.setItem("ThursdayDinner", recipeTitle);
        localStorage.setItem("ThursdayDinnerIngredients", recipeIngredients);
        localStorage.setItem("ThursdayDinnerInstructions", recipeInstructions);
        localStorage.setItem("ThursdayDinnerMealChoice", mealInput)
        localStorage.setItem("ThursdayDinnerChefChoice", newChef)
    }
    else if (newDay === "Friday" && newMeal === "Breakfast") {
        localStorage.setItem("FridayBreakfast", recipeTitle);
        localStorage.setItem("FridayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("FridayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("FridayBreakfastMealChoice", mealInput)
        localStorage.setItem("FridayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Friday" && newMeal === "Lunch") {
        localStorage.setItem("FridayLunch", recipeTitle);
        localStorage.setItem("FridayLunchIngredients", recipeIngredients);
        localStorage.setItem("FridayLunchInstructions", recipeInstructions);
        localStorage.setItem("FridayLunchMealChoice", mealInput)
        localStorage.setItem("FridayLunchChefChoice", newChef)
    }
    else if (newDay === "Friday" && newMeal === "Dinner") {
        localStorage.setItem("FridayDinner", recipeTitle);
        localStorage.setItem("FridayDinnerIngredients", recipeIngredients);
        localStorage.setItem("FridayDinnerInstructions", recipeInstructions);
        localStorage.setItem("FridayDinnerMealChoice", mealInput)
        localStorage.setItem("FridayDinnerChefChoice", newChef)
    }
    else if (newDay === "Saturday" && newMeal === "Breakfast") {
        localStorage.setItem("SaturdayBreakfast", recipeTitle);
        localStorage.setItem("SaturdayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("SaturdayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("SaturdayBreakfastMealChoice", mealInput)
        localStorage.setItem("SaturdayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Saturday" && newMeal === "Lunch") {
        localStorage.setItem("SaturdayLunch", recipeTitle);
        localStorage.setItem("SaturdayLunchIngredients", recipeIngredients);
        localStorage.setItem("SaturdayLunchInstructions", recipeInstructions);
        localStorage.setItem("SaturdayLunchMealChoice", mealInput)
        localStorage.setItem("SaturdayLunchChefChoice", newChef)
    }
    else if (newDay === "Saturday" && newMeal === "Dinner") {
        localStorage.setItem("SaturdayDinner", recipeTitle);
        localStorage.setItem("SaturdayDinnerIngredients", recipeIngredients);
        localStorage.setItem("SaturdayDinnerInstructions", recipeInstructions);
        localStorage.setItem("SaturdayDinnerMealChoice", mealInput)
        localStorage.setItem("SaturdayDinnerChefChoice", newChef)
    }
    else if (newDay === "Sunday" && newMeal === "Breakfast") {
        localStorage.setItem("SundayBreakfast", recipeTitle);
        localStorage.setItem("SundayBreakfastIngredients", recipeIngredients);
        localStorage.setItem("SundayBreakfastInstructions", recipeInstructions);
        localStorage.setItem("SundayBreakfastMealChoice", mealInput)
        localStorage.setItem("SundayBreakfastChefChoice", newChef)
    }
    else if (newDay === "Sunday" && newMeal === "Lunch") {
        localStorage.setItem("SundayLunch", recipeTitle);
        localStorage.setItem("SundayLunchIngredients", recipeIngredients);
        localStorage.setItem("SundayLunchInstructions", recipeInstructions);
        localStorage.setItem("SundayLunchMealChoice", mealInput)
        localStorage.setItem("SundayLunchChefChoice", newChef)
    }
    else if (newDay === "Sunday" && newMeal === "Dinner") {
        localStorage.setItem("SundayDinner", recipeTitle);
        localStorage.setItem("SundayDinnerIngredients", recipeIngredients);
        localStorage.setItem("SundayDinnerInstructions", recipeInstructions);
        localStorage.setItem("SundayDinnerMealChoice", mealInput)
        localStorage.setItem("SundayDinnerChefChoice", newChef)
    }

    $("#saveBtn").attr("data-dismiss", "modal")

});