$(document).ready(() => {
 
   
    //We get our current user's data, and then store the id
    $.get("/api/user_data").then( data => {
        let thisId = data.id

        //We use the stored id to find the current user's teamId
        //If there is no team associated with the user, has a modal pop up that holds the link to our newTeam page
        $.get("/api/users/id/" + thisId).then( results => {
            id = results[0].TeamId
                if (results[0].TeamId === null) {
                    $("#noTeamModal").modal("show");
                    $("#noTeamModal").modal({backdrop: "static", keyboard: false})
                }
                   
                
            
        });
    });

    //Clicking our button in our pop up modal redirects to the newTeam page
    $(".btn-newTeam").on("click", () => {
        window.location.replace("/newTeam");
    })

    
});
    
