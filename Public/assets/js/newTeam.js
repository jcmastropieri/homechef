$(document).ready(() =>  {  

const teamInput = $("#teamname-input");

var thisId;
var thisTeamId;
var indexNum

var teams = [];

console.log("name?")
console.log(teamInput)
console.log(teamInput.val().trim())

    $.get("/api/user_data", function(data) {

        thisId = data.id
        
    });

    
   

    $(".signup").on("submit", function(event) {
        event.preventDefault();

        const arrayKey = []

        for (i = 0; i < 5; i ++) {
            let randomKey = Math.floor(Math.random() * 10);
            arrayKey.push(randomKey)
        }
        const finalKey = arrayKey.join("");
    

        const newTeam = {
            newUsername: teamInput.val().trim(),
            key: finalKey
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
   
 
  
    $("#send-btn").on("click", function (event) {

        event.preventDefault();

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

    $("#later-btn").on("click", function() {
        window.location.replace("/members");
    })


});