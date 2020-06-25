$(document).ready(function () {
    // const fs = require("fs");
    
    var TeamId;
    var userId
    var id;

    // file.slice(-3)

    renderTeamMembers();

    async function renderTeamMembers() {

        await $.get("/api/user_data").then( data => {
            console.log(data);
            let thisId = data.id
            $.get("/api/users").then( results => {
                console.log(results)
                for (i = 0; i < results.length; i ++) {
                    if (results[i].id === thisId)
                    console.log("hi?")
                    console.log(results[i].id + "break" + thisId);
                        id = results[i].TeamId
                        console.log(id);
                    }
            
        


            $.get("/api/chef/" + id).then( data => {
            
            console.log(data);
                for (i = 0; i < data.length; i++ ) {
                var newRow = $("<div></div>").addClass("row")
                var newCol = $("<div></div>").addClass("col-6")
                var chefDiv = $("<div></div>")
                var chefP = $("<p></p>").text("Chef Name: " + data[i].Chef.chefName);
                var imageP = $("<p></p>").html(data[i].Chef.chefImage);
                //this need to be + chefImage, and chefImage needs to be the name of the file as well
                var amazonImage = $("<img></img>").attr("src", "https://cookingtogether.s3.ca-central-1.amazonaws.com/" + data[i].Chef.chefName)
                var amazonImage = $("<img></img>").attr("src", "https://cookingtogether.s3.ca-central-1.amazonaws.com/quiz+background2.png")
                var foodP = $("<p></p>").text("Chef's Dietary Needs: " + data[i].Chef.chefFoodConsiderations)
                chefDiv.append(chefP)
                chefDiv.append(imageP)
                chefDiv.append(foodP)
                chefDiv.append(amazonImage);
                newCol.append(chefDiv)
                newRow.append(newCol)
                $(".your-chefs").append(newRow)
                
                }
           
        });
        });

    });



    }

    $("#send-btn").on("click", function (event) {

        event.preventDefault();

        console.log("save working?");
        var emailForm = $("#team-email").val().trim();
        console.log(emailForm)
        var nodemail = {
            email: emailForm,
            key: teams[indexNum].key
        }
        console.log(nodemail)

        $.post("/email", nodemail, function() {
            console.log("Server received our data");
        });

  
        $("#team-email").val("");

        alert("Your email has been sent!");

        
    });

    // $.get("/api/user_data").then((data) => {
    //     console.log(data);
    //     id = data.id
    //     console.log(id)
        // $.get("api/users").then((results) => {
        //     console.log(results)
        //     for (i = 0; i < results.length; i ++) {
        //         console.log(results[i].id)
        //         if (results[i].id === userId)
        //             console.log(results[i].id + " break " + thisId)
        //                 console.log(results[i].TeamId)
        //                 id = results[i].TeamId

        //         }
        // })
    // });

    // C:\\fakepath\\IMG_3663.jpg",
    
    // $.get("/api/chef/" + id, function(data) {
    //     console.log(data);
    //     for (i = 0; i < data.length; i++ ) {
           
    //         // let image = chefImage.slice(14)
    //         // console.log(image);

    //         // fs.writeFile("../TT Images/userImages" + image, image, function(err) {
    //         //     if (err) throw err;
    //         // });
    //         var newRow = $("<div></div>").class("row")
    //         var newCol = $("<div></div>").class("col-6")
    //         var chefDiv = $("<div></div>")
    //         var chefP = $("<p></p>").text(data[i].Chef.chefName);
    //         var imageP = $("<p></p>").html(data[i].Chef.chefImage);
    //         var foodP = $("<p></p>").text(data[i].Chef.chefFoodConsiderations)
    //         chefDiv.append(chefP)
    //         chefDiv.append(imageP)
    //         chefDiv.append(foodP)
    //         newCol.append(chefDiv)
    //         newRow.append(newCol)
    //         $(".container").append(newRow)
    //         // console.log(data[i].Chef.chefImage)
    //         console.log(data[i].Chef.chefName)
    //         console.log(data[i].Chef.chefFoodConsiderations)
    //     }
    // });

});