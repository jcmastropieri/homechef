$(document).ready(function () {
    const signupForm = $(".signup");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
    const newChef = $("#name-input");
    const newFood = $("#food-input");
    const newChefImage = $("#customFile")
   
    var useTeamId;
    var activationTeamId = localStorage.getItem("TeamId");
    console.log(activationTeamId)
    if (activationTeamId === null) {
        useTeamId = 0;
    }
    else {
        useTeamId = parseInt(activationTeamId);
    }
    console.log(useTeamId)

    var users =[];
    var indexNum;
  
    bsCustomFileInput.init()


    //   $.get("/api/genre/" + genreSearched, function(data) {

    signupForm.on("submit", event => {
        event.preventDefault();
        // let sidekickImage = $('input[name="Choice"]:checked').val();
  
  
        const newChefData = {
            chefName: newChef.val().trim(),
            chefImage: newChefImage.val().trim(),
            chefFood: newFood.val().trim()
        }   
  
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            TeamId: useTeamId
        };
  
        if (!userData.email || !userData.password) {
            alert("Please enter a valid username and password.")
            return;
        }
        
        if (!newChefData.chefName) {
            alert("Please enter your name!")
            return;
          }
    
          //use a default if they no want
        if (!newChefData.chefImage) {
            alert("Please select an image for your team picture!")
            return;
        }

        if (!newChefData.chefFood) {
            alert("Please enter any dietary restrictions, or say 'none'")
            return;
        }
        
        if (useTeamId === 0) {
            createUserandChef(userData.email, userData.password, newChefData.chefName, newChefData.chefImage, newChefData.chefFood);
        }
        else {
            teamCreateUserandChef(userData.email, userData.password, newChefData.chefName, newChefData.chefImage, newChefData.chefFood, userData.TeamId,);
        }
        alert("Welcome Chef " + newChefData.chefName + "!")
    });
  
  
    async function createUserandChef(email, password, name, image, food, teamId) {
        await $.post("/api/signup", {
            email: email,
            password: password
        }).then(function () {
                console.log("new user added");
        });
          
        await $.get("/api/users", function(data) {
            users = data;
            indexNum = (users.length - 1)
        });
        $.post("/api/chef", {
            chefName: name,
            chefImage: image,
            chefFoodConsiderations: food,
            UserId: users[indexNum].id
        }).then(function () {
                    console.log("added chef");
                    window.location.replace("/index");
            });
    }

    async function teamCreateUserandChef(email, password, name, image, food, teamId) {
        await $.post("/api/signup", {
            email: email,
            password: password
        }).then(function () {
            console.log("new user added");
        });
             
            
        await $.get("/api/users", function(data) {
            users = data;
            console.log(users)
            indexNum = (users.length - 1)

        });


        await $.post("/api/chef", {
            chefName: name,
            chefImage: image,
            chefFoodConsiderations: food,
            UserId: users[indexNum].id
        }).then(function () {
                    console.log("added chef");
                    // window.location.replace("/index");
            });

         let id = users[indexNum].id
        await $.ajax({
            method: "PUT",
            url: "/api/users/" + id,
            data: {
                TeamId: teamId,
            }
            }).then( () => {
            console.log("id updated")
            window.location.replace("/index");
            })
    }
  
});