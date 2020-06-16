$(document).ready(() =>  {  

const teamInput = $("#teamname-input");

var thisId;
var thisTeamId;

var teams = [];

console.log("name?")
console.log(teamInput)
console.log(teamInput.val().trim())

    $.get("/api/user_data", function(data) {

        thisId = data.id
        
    });

    
   

    $(".signup").on("submit", function(event) {
        event.preventDefault();

        console.log(teamInput.val().trim())

        const newTeam = {
            newUsername: teamInput.val().trim(),
            key: 12345
        }

        async function makeNewTeam () {
            await $.post("/api/team", {
                username: newTeam.newUsername,
                key: newTeam.key,
            // userId: thisId
            }).then( () => {
                console.log("new team added");
            });

            await $.get("/api/team", function(data) {
                console.log("this is all teams data")
                console.log(data)
                teams = data;
                indexNum = (teams.length -1 )
            })

            console.log("this is the team id number")
            console.log(teams[indexNum].id)

            // $.ajax({
            //     method: "PUT",
            //     url: "/api/user_data",
            //     data: {
            //         TeamId: teams[indexNum].id,
            //         id: thisId
            //     }
            // }).then( () => {
            //     console.log("id updated")
            // })

            $.ajax({
                method: "PUT",
                url: "/api/users/" + thisId,
                data: {
                    TeamId: teams[indexNum].id
                }
            }).then( () => {
                console.log("id updated")
            })

        }
        makeNewTeam();
    })
   
 

    $(".addEmailForm").on("click", function (event) {
        event.preventDefault();
        var newDiv = $("<div></div>")
        newDiv.html(' <label for = "inviteEmail" id = "emailHelp"></label> <input type = "email" class="form-control inviteEmails" id="InputEmail1" aria-describedby="#emailHelp"> ');
        $(".email-forms").append(newDiv);
        console.log("party?")
    });

    //Need to do code
    $("#sendBtn").on("click", function (event) {
        event.preventDefault();
        console.log("save working?");
        var emailForm = $(".inviteEmails").val().trim();
        var emails = {
            email: emailForm
        }
        console.log(emails)

        $.post("/email", emails, function() {
            console.log("Server received our data");
        });

  


        $("#saveBtn").attr("data-dimiss", "modal");
        
    })


});