$(document).ready(function() {
     
    let id;

    renderList();

    async function renderList() {
        await $.get("/api/user_data").then( data => {
            let thisId = data.id
            $.get("/api/users/id/" + thisId).then( results => {
                id = results[0].TeamId

                $.get("/api/grocery/" + id).then( data => {
                    console.log(data);
                    for (i = 0; i < data.length; i++) {
                        $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
                    <label for="vehicle3"><h3 class="grocery-list">${data[i].listItem}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
                    <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
                    
                    }
                });

            });
        });
    
        // await $.get("/api/grocery/" + id).then( data => {
        //     console.log(data);
        //     for (i = 0; i < data.length; i++) {
        //         $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
        //     <label for="vehicle3"><h3 class="grocery-list">${data[i].listItem}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
        //     <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
            
        //     }
        // });

    }
    // $.get("/api/user_data").then( data => {
    //     let thisId = data.id
    //     $.get("/api/users/id/" + thisId).then( results => {
    //         id = results[0].TeamId
    //     });
    // });

    // $.get("/api/grocery/" + id).then( data => {
    //     console.log(data);
    //     for (i = 0; i < data.length; i++) {
    //         $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
    //     <label for="vehicle3"><h3 class="grocery-list">${data[i].listItem}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
    //     <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
        
    //     }
    // })

    $("#submitGrocery").on('click', function(){
        let grocery = $("#groceryInput").val().trim();
        if(grocery){
             $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
        <label for="vehicle3"><h3 class="grocery-list">${grocery}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
        <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
        
        createAndGet(grocery);
        } 
      
    });

    async function createAndGet(newItem) {
        
        await $.post("/api/grocery", {
            listItem: newItem,
            TeamId: id,
        }).then( () => {
            console.log("new item added");
        });

        $.get("/api/grocery").then( data => {
            console.log(data);
        })
        // $.ajax({
        //     method: "PUT",
        //     url: "/api/grocery/" + thisId,
        //     data: {
        //         TeamId: teams[indexNum].id
        //     }
        // }).then( () => {
        //     console.log("id updated")
        // })
    }
    
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
                var ingredients = JSON.parse(data[i].recipeIngredients);
                console.log(ingredients)
                listIngredients(ingredients)
                console.log(i);
            }
        })
    })

    function listIngredients(takenList) {
        console.log("running");

        for (j = 0; j < takenList.length; j++) {
            $("#listContainer").prepend(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
        <label for="vehicle3"><h3 class="grocery-list">${takenList[j]}</h3></label><button id="someString" class="btn btn-success ml-29 btn-sm complete">Complete</button>
        <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)

        createAndGet(takenList[j]);
        }
    };
    
});

