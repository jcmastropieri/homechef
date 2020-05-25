$(document).ready(function() {
    $("#submitGrocery").on('click', function(){
        let grocery = $("#groceryInput").val().trim();
        if(grocery){
             $("#listContainer").append(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3 checkbox">
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
    
})

