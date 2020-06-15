$(document).ready(function () {
    const fs = require("fs");
    
    var Teamid;
    var userId
    

    file.slice(-3)

    $.get("/api/user_data").then((data) => {
        console.log(data);
        userId = data.id
        console.log(userId)
        $.get("api/users").then((results) => {
            console.log(results)
            for (i = 0; i < results.length; i ++) {
                console.log(results[i].id)
                if (results[i].id === userId)
                    console.log(results[i].id + " break " + thisId)
                        console.log(results[i].TeamId)
                        id = results[i].TeamId

                }
        })
    });

    // C:\\fakepath\\IMG_3663.jpg",
    
    $.get("api/chef/" + Teamid, function(data) {
        console.log(data);
        for (i = 0; i < data.length; i++ ) {
           
            let image = chefImage.slice(14)
            console.log(image);

            fs.writeFile("../TT Images/userImages" + image, image, function(err) {
                if (err) throw err;
            });

            var chefDiv = $("<div></div>")
            var chefP = $("<p></p>").text(data[i].Chef.chefName);
            var imageP = $("<p></p>").html(data[i].Chef.chefImage);
            var foodP = $("<p></p>").text(data[i].Chef.chefFoodConsiderations)
            chefDiv.append(chefP)
            chefDiv.append(imageP)
            chefDiv.append(foodP)
            $(".chefSection").append(chefDiv)
            console.log(data[i].Chef.chefImage)
            console.log(data[i].Chef.chefName)
            console.log(data[i].Chef.chefFoodConsiderations)
        }
    })

});