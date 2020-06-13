$(document).ready(() =>  {  

const teamInput = $("#teamname-input");

var thisId;

console.log("name?")
console.log(teamInput)
console.log(teamInput.val().trim())

    $.get("/api/user_data", function(data) {
        console.log(data.id)
        thisId = data.id
        
    });

    
   

    $(".signup").on("submit", function(event) {
        event.preventDefault();

        console.log(teamInput.val().trim())

        const newTeam = {
            newUsername: teamInput.val().trim(),
            key: 12345
        }

        $.post("/api/team", {
            username: newTeam.newUsername,
            key: newTeam.key,
            // userId: thisId
        }).then( () => {
            console.log("new team added");
        });


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