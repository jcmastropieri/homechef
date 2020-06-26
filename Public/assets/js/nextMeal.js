$(document).ready(() => {


    //these lines get the current day and time (in military) from the local computer
    const d = new Date();
    const format = "dddd";
    const nowDate = d.toLocaleDateString()
    const day = moment(nowDate).format(format);


    const hourString = moment(d).format("H");
    let time = parseFloat(hourString);

    //these lines define the global variables necessary later
    let dish;
    let id;
    var num = 0;
    

    //Displays local time
    $("#dateEl").prepend(new Date().toLocaleDateString());

    //This sets time to a string so we can grab from our meal model
    if (time <= 9) {
        time = "Breakfast";
    }
    if (time <= 15 && time > 9) {
        time = "Lunch";
    }
    if (time > 15) {
        time = "Dinner";
    }

    //This calls our parent function
    startMeal();

    async function startMeal() {
    
        //this gets the current user data and then stores the id in a variable
        await $.get("/api/user_data").then( data => {
            let thisId = data.id
        
            //Then we use the variable to get the teamid from the user
            //And then stores the teamid in id
            $.get("/api/users/id/" + thisId).then( results => {
                id = results[0].TeamId
            

                //Calls our function that renders our titles for our dropdowns
                dropdownRender(id);

                $.get("/api/meal/" + day + "/" + time + "/" + id).then( data => {

                    //For each meal in that day and time slot, renders a clickable button and appends it to our html
                    for (i = 0; i < data.length; i++) {
                    
                        let whichRecipe = $("<button></button>")
                        whichRecipe.text(data[i].recipeTitle)
                        whichRecipe.attr("value", data[i].id)
                        whichRecipe.addClass("btn btn-default which-recipe")
                        $(".choose-recipe").append(whichRecipe);
                    }
            
                    //Then we render our first meal's info using renderMeal function
                    renderMeal(data);
        
        
                });
            });
        });

    

    }


    //Hands our rending to the page using selected meal
    const renderMeal = data => {

        let ingredients = JSON.parse(data[0].recipeIngredients);
        let instructions = JSON.parse(data[0].recipeInstructions);

        
        dish = data[0].mealSearched
        $("#dishName").html("Click to Change the Gif");
        listIngredients(ingredients);
        listInstructions(instructions[0].steps);
    
        $(".mealText").html("&nbsp;" + data[0].recipeTitle);
        $("#chefName").text("Chef: " + data[0].mealChef);
        $(".chef").attr("src", "assets/TT Images/joechef.png")
        //ajax call for getting image from name
    
        
        //call our function to render our random gif
        showGif(num);
        
    };

    const showGif = indexNum => {
        const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            let imageUrl = response.data[indexNum].images.fixed_height.url;
            let gif = $("<img>");
            gif.attr("src", imageUrl);
            gif.attr("alt", "Meal Image");
            gif.attr("class", "giphy");
            $("#images").html(gif);
            
        }); 
        
    };

    //This function makes it so that a new gif is picked everytime you click on the image
    $("#images").on("click", function(event){
        event.preventDefault();

        num += 1;
        showGif(num);
        
    });

    //this takes the ingredients and puts them into list form
    const listIngredients = takenList => {
    
        let ingredsP = $("<p>");
        var newUL = $("<ul>");

        for (i = 0; i < takenList.length; i++) {
            var newListItem = $("<li>").text(takenList[i]);
            newUL.append(newListItem);
        }
        ingredsP.append(newUL);
        $(".ingredientsList").html(ingredsP);
    };

    //this takes the instructions and puts them into list form
    const listInstructions = takenList => {

        let instructP = $("<p>");
        var newOL = $("<ol>");

        for (i = 0; i < takenList.length; i++) {
            var newListItem = $("<li>").text(takenList[i]);
            newOL.append(newListItem);
        }
        instructP.append(newOL);
        $(".instructionsList").html(instructP)
    };

    //Meal button is clicked on, then that meal is rendered
    $(document).on("click", ".which-recipe", () => {
    
        let user = this.value
        $.get("/api/meal/schedule/" + user).then( data => {
            renderMeal(data);
        });
    });

    //This renders the titles for each meal in our drop-downs, for a quick look
    const renderScheduleTitles = (day, time, id) => {
        $.get("/api/meal/" + day + "/" + time + "/" + id).then( data => {

            for (i = 0; i < data.length; i++) {
                var pText = $("<p></p>")
                pText.text(data[i].recipeTitle);
                $("." + day + "-" + time).append(pText);
            }
        });

    };

    //This function uses renderScheduleTitles for each meal day and time
    const dropdownRender =  id => {
        renderScheduleTitles("Monday", "Breakfast", id);
        renderScheduleTitles("Monday", "Lunch", id);
        renderScheduleTitles("Monday", "Dinner", id);

        renderScheduleTitles("Tuesday", "Breakfast", id);
        renderScheduleTitles("Tuesday", "Lunch", id);
        renderScheduleTitles("Tuesday", "Dinner", id);

        renderScheduleTitles("Wednesday", "Breakfast", id);
        renderScheduleTitles("Wednesday", "Lunch", id);
        renderScheduleTitles("Wednesday", "Dinner", id);

        renderScheduleTitles("Thursday", "Breakfast", id);
        renderScheduleTitles("Thursday", "Lunch", id);
        renderScheduleTitles("Thursday", "Dinner", id);

        renderScheduleTitles("Friday", "Breakfast", id);
        renderScheduleTitles("Friday", "Lunch", id);
        renderScheduleTitles("Friday", "Dinner", id);

        renderScheduleTitles("Saturday", "Breakfast", id);
        renderScheduleTitles("Saturday", "Lunch", id);
        renderScheduleTitles("Saturday", "Dinner", id);

        renderScheduleTitles("Sunday", "Breakfast", id);
        renderScheduleTitles("Sunday", "Lunch", id);
        renderScheduleTitles("Sunday", "Dinner", id);
    };


});
