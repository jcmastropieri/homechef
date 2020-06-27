$(document).ready(() => {

    //define our necessary global variables
    let recipeTitle;
    let recipeIngredients;
    let recipeInstructions;
    let mealInput;
    let id;

    //this gets the current user data and then uses it store the teamId in our id variable
    $.get("/api/user_data").then( data => {
        let thisId = data.id
        $.get("/api/users/id/" + thisId).then( results => {
            id = results[0].TeamId
        });
    });


    $(".mealBtn").on("click", function(event) {
        event.preventDefault();
   
        

        mealInput = $(".inputMeal").val()

        //This is an api call to recipe puppy, which will return links to recipes
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://recipe-puppy.p.rapidapi.com/?p=1&q=" + mealInput,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c"
            }
        }
    
        $.ajax(settings).done( response => {
            let results = JSON.parse(response);
            for (i = 0; i < results.results.length; i++ ) {
                let newP = $("<p>");
                let link = $("<a>");
                let newRecp = results.results[i].href

                link.attr("href", newRecp)
                link.attr("target", "_blank")
                link.text(newRecp);
                newP.html(link);
                $(".recipes").prepend(newP);
            }
        });

        $(".inputURL").val("");
    

    });

    //When the url button is clicked on
    $(".urlBtn").on("click", function(event) {
        event.preventDefault();

        //Runs the API for mycookbook, which takes information from a webpage and puts it in a usable object
        let submittedURL = $(".inputURL").val()
        let settings = {
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
    
        $.ajax(settings).done( response => {

            recipeTitle = response[0].name
            recipeIngredients = JSON.stringify(response[0].ingredients)
            recipeInstructions = JSON.stringify(response[0].instructions)
            
        });

        //This grabs all of the chefs in this team and makes them options
        $.get("/api/chef/" + id).then( data => {
        
            $(".add-chef").html("");
            for (i = 0; i < data.length; i++) {
                var newOption = $("<option></option>");
                newOption.text(data[i].Chef.chefName)
                $(".add-chef").append(newOption)
            }
        });

        //Then brings up the options modal, so that we can add a meal using the variables we've created and populated
        $('#optionsModal').modal({
            show: true
        });

    });




    //The save changes button in the modal
    $("#saveBtn").on("click", function(event) {
        event.preventDefault();

        const newDay = $("#daySelector").val();
        const newMeal = $("#mealSelector").val();
        const newChef = $("#chefSelector").val();

        //this gives us a default in case a user wants to use their own URL
        if (mealInput === "") {
            mealInput = "cooking";
        }

        //This creates a new meal
        $.post("/api/meal", {
            mealDay: newDay,
            mealTime: newMeal,
            mealSearched: mealInput,
            recipeTitle: recipeTitle,
            recipeIngredients: recipeIngredients,
            recipeInstructions: recipeInstructions,
            mealChef: newChef,
            TeamId: id
        }).then( () => {
            console.log("meal added")
            $(".inputURL").val("");
            $(".recipes").html("");
            $(".inputMeal").val("");
            alert("Your meal was added!");
        });

        //Clicking save also closes the modal
        $("#saveBtn").attr("data-dismiss", "modal")

    });

});