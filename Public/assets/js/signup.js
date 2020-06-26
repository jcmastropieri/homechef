$(document).ready(function () {

    //Here we grab our necessary input from newUser.html
    const signupForm = $(".signup");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
    const newChef = $("#name-input");
    const newFood = $("#food-input");
    const newChefImage = $("#customFile")

    //necessary global variables
    var users =[];
    var indexNum;
   
    //This checks to see if someone got to this page through the activation link
    var useTeamId;
    var activationTeamId = localStorage.getItem("TeamId");

    console.log(newChefImage)

    //If they did get to here by the activation link, then we will run the function that assigns a TeamId
    //Otherwise, we run the function that leaves the TeamId blank for now
    if (activationTeamId === null) {
        useTeamId = 0;
    }
    else {
        useTeamId = parseInt(activationTeamId);
    }
    

    //This allows us to pick a file from our computer
    bsCustomFileInput.init()
    
   
    //When the form is submitted
    signupForm.on("submit", event => {
        event.preventDefault();
        
        //Create new objects to use in our parameters
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
  
        //Section for checks to make sure all information was entered
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
        
        //This is where we specify which predefined function to use, depending on whether or not an activation link was sent
        if (useTeamId === 0) {
            createUserandChef(userData.email, userData.password, newChefData.chefName, newChefData.chefImage, newChefData.chefFood);
        }
        else {
            teamCreateUserandChef(userData.email, userData.password, newChefData.chefName, newChefData.chefImage, newChefData.chefFood, userData.TeamId,);
        }
        alert("Welcome Chef " + newChefData.chefName + "!")
    });
  
  
    async function createUserandChef(email, password, name, image, food) {
        //creates a new user
        await $.post("/api/signup", {
            email: email,
            password: password
        }).then(function () {
                console.log("new user added");
        });
        
        //grabs the current user's index number
        await $.get("/api/users", function(data) {
            users = data;
            indexNum = (users.length - 1)
        });
        

        // $.post("/image-upload", {
        //     file: image
        // }).then(function () {
        //     console.log("added image?");
        // })

        //creates a new chef and assigns them the match userid
        //then clears local storage and goes to the member page
        $.post("/api/chef", {
            chefName: name,
            chefImage: image,
            chefFoodConsiderations: food,
            UserId: users[indexNum].id
        }).then(function () {
                    console.log("added chef");
                    localStorage.clear();
                    // window.location.replace("/members");
        });

    }

    async function teamCreateUserandChef(email, password, name, image, food, teamId) {
        //Creates a new user
        await $.post("/api/signup", {
            email: email,
            password: password
        }).then(function () {
            console.log("new user added");
        });
             
        //Grabs the current user's index number
        await $.get("/api/users", function(data) {
            users = data;
            indexNum = (users.length - 1)

        });

        //Creates a new chef and assigns them the match userid
        
        await $.post("/api/chef", {
            chefName: name,
            chefImage: image,
            chefFoodConsiderations: food,
            UserId: users[indexNum].id
        }).then(function () {
                    console.log("added chef");
            });

         let id = users[indexNum].id

        //Updates the TeamId to the created user to match the activation link TeamId
        //then clears local storage and goes to the member page 
        await $.ajax({
            method: "PUT",
            url: "/api/users/" + id,
            data: {
                TeamId: teamId,
            }
            }).then( () => {
            console.log("id updated")
            localStorage.clear();
            window.location.replace("/members");
            })
    }
  
});