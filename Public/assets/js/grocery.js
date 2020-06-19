$(document).ready(function() {
     
    var id;

    $.get("/api/user_data").then((data) => {
        let thisId = data.id
        $.get("api/users").then((results) => {
            for (i = 0; i < results.length; i ++) {
                if (results[i].id === thisId)
                    id = results[i].TeamId
                    console.log(id);
            }
        })
    });

    $("#submitGrocery").on('click', function(){
        let grocery = $("#groceryInput").val().trim();
        if(grocery){
             $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
        <label for="vehicle3"><h3 class="grocery-list">${grocery}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
        <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
         
    }
      
    });
    
    $(document).on("click", ".complete", function() {
        var $grocerylist = $(this).siblings().children()
        $grocerylist.addClass("line-over")
    })
    
    $(document).on("click", ".delete", function() {
        var $grocerylist = $(this).siblings().children()    
         $grocerylist.parent().parent().remove();
             
    })

    $("#meal-list").on("click", function() {
        console.log("button works")
        $.get("/api/meal/" + id, (data) => {
            console.log(data)
            console.log(data.length);
            for (i = 0; i < data.length; i++) {
                console.log("should run each time")
                let ingredients = JSON.parse(data[i].recipeIngredients);
                listIngredients(ingredients)
            }
        })
    })

    function listIngredients(takenList) {
        console.log("running");

        for (i = 0; i < takenList.length; i++) {
            $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
        <label for="vehicle3"><h3 class="grocery-list">${takenList[i]}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
        <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
        }
    };
    
});

