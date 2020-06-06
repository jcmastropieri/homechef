$(document).ready(function () {
    const signupForm = $(".signup");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
    const newChef = $("#name-input");
    const newFood = $("#food-input");
   
   
    var users =[];
    var indexNum;
  
  
    signupForm.on("submit", event => {
        event.preventDefault();
        // let sidekickImage = $('input[name="Choice"]:checked').val();
  
  
        const newChefData = {
            name: newChef.val().trim(),
            // image: image
            chefFood: newFood.val().trim()
        }   
  
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
  
        if (!userData.email || !userData.password) {
            alert("Please enter a valid username and password.")
            return;
        }
  
        
       
        createUserandChef(userData.email, userData.password, newChefData.name, newChefData.chefFood);
        emailInput.val("");
        passwordInput.val("");
        newChef.val("");
        newFood.val("");
        alert("Welcome Chef " + newChef.name + "!")
    });
  
  
    async function createUserandChef(email, password, name, food) {
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
        $.post("/api/newChef", {
            sidekickName: name,
            sidekickImage: "party",
            UserId: users[indexNum].id
        }).then(function () {
                    console.log("added sidekick");
                    window.location.replace("/members");
            });
    }
  
  });