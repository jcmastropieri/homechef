$(document).ready(function () {
    
    var TeamId;
    var userId
    let id;
    let teamKey;

    //Call our function that renders all our team members
    renderTeamMembers();

    async function renderTeamMembers() {

        //Get the teamId
        await $.get("/api/user_data").then( data => {
            
            let thisId = data.id
            $.get("/api/users/id/" + thisId).then( results => {
                id = results[0].TeamId

                //Use the teamId to grab all chefs in a team
                $.get("/api/chef/" + id).then( data => {
            
                    for (i = 0; i < data.length; i++ ) {

                        //Renders all of our html
                        let newRow = $("<div></div>").addClass("row")
                        let newCol = $("<div></div>").addClass("col-6")
                        let chefDiv = $("<div></div>").addClass("each-chef")
                        let chefP = $("<h2></h2>").text("Chef Name: " + data[i].Chef.chefName);
                
                        //matches our chefImage name to our s3 link
                        let noOutsideSpace = (data[i].Chef.chefImage).trim()
                        let spacePlus = noOutsideSpace.split(" ").join("+");
    
                        let amazonImage = $("<img></img>").attr("src", "https://cookingtogether.s3.ca-central-1.amazonaws.com/" + spacePlus)
                        amazonImage.addClass("picture-size")
                        
                        let foodP = $("<p></p>").text("Chef's Dietary Needs: " + data[i].Chef.chefFoodConsiderations)

                        chefDiv.append(chefP)
                        chefDiv.append(amazonImage);
                        chefDiv.append(foodP)
            
                        newCol.append(chefDiv)
                        newRow.append(newCol)

                        $(".your-chefs").append(newRow)
                
                    }
           
                });
            });
        });
    }

    //When our send button in our modal is clicked
    $("#send-btn").on("click", function (event) {
        event.preventDefault();

        //Uses an API call to get the key of our current team to send an activation link
        $.get("/api/team/" + id).then( results => {
            
            teamKey = results[0].key
            const emailForm = $("#team-email").val().trim();
            
            //creates our object needed to send our email
            const nodemail = {
                email: emailForm,
                key: teamKey
            }
            
            //Sends our email
            $.post("/email", nodemail, function() {
                console.log("Server received our data");
            });

  
            $("#team-email").val("");

            alert("Your email has been sent!");
        });
        
    });

});