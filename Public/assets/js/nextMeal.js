//use these variables to check that it works. Make sure that you comment out the later var day and time on line 13 and 11

// var time = 8;
// var day = "Sunday";

//these lines get the current day and time (in military) from the local computer
var d = new Date();
var format = "dddd";
nowDate = d.toLocaleDateString()
var result = moment(nowDate).format(format);
var day = result

var hourString = moment(d).format("H");
var time = parseFloat(hourString);

//these lines define the variables necessary later
var dish = ""
var chef = ""


    //variables for giphy api
    var MondayBreakfastMealChoice = localStorage.getItem("MondayBreakfastMealChoice");

    var MondayLunchMealChoice = localStorage.getItem("MondayLunchMealChoice");

    var MondayDinnerMealChoice = localStorage.getItem("MondayDinnerMealChoice");

    var TuesdayBreakfastMealChoice = localStorage.getItem("TuesdayBreakfastMealChoice");

    var TuesdayLunchMealChoice = localStorage.getItem("TuesdayLunchMealChoice");

    var TuesdayDinnerMealChoice = localStorage.getItem("TuesdayDinnerMealChoice");

    var WednesdayBreakfastMealChoice = localStorage.getItem("WednesdayBreakfastMealChoice");

    var WednesdayLunchMealChoice = localStorage.getItem("WednesdayLunchMealChoice");

    var WednesdayDinnerMealChoice = localStorage.getItem("WednesdayDinnerMealChoice");

    var ThursdayBreakfastMealChoice = localStorage.getItem("ThursdayBreakfastMealChoice");

    var ThursdayLunchMealChoice = localStorage.getItem("ThursdayLunchMealChoice");

    var ThursdayDinnerMealChoice = localStorage.getItem("ThursdayDinnerMealChoice");

    var FridayBreakfastMealChoice = localStorage.getItem("FridayBreakfastMealChoice");

    var FridayLunchMealChoice = localStorage.getItem("FridayLunchMealChoice");

    var FridayDinnerMealChoice = localStorage.getItem("FridayDinnerMealChoice");

    var SaturdayBreakfastMealChoice = localStorage.getItem("SaturdayBreakfastMealChoice");

    var SaturdayLunchMealChoice = localStorage.getItem("SaturdayLunchMealChoice");

    var SaturdayDinnerMealChoice = localStorage.getItem("SaturdayDinnerMealChoice");

    var SundayBreakfastMealChoice = localStorage.getItem("SundayBreakfastMealChoice");

    var SundayLunchMealChoice = localStorage.getItem("SundayLunchMealChoice");

    var SundayDinnerMealChoice = localStorage.getItem("SundayDinnerMealChoice");
   

    //title variable local gets
    var MondayBreakfastTitle = localStorage.getItem("MondayBreakfast");

    var MondayLunchTitle = localStorage.getItem("MondayLunch");

    var MondayDinnerTitle = localStorage.getItem("MondayDinner");

    var TuesdayBreakfastTitle = localStorage.getItem("TuesdayBreakfast");

    var TuesdayLunchTitle = localStorage.getItem("TuesdayLunch");

    var TuesdayDinnerTitle = localStorage.getItem("TuesdayDinner");

    var WednesdayBreakfastTitle = localStorage.getItem("WednesdayBreakfast");

    var WednesdayLunchTitle = localStorage.getItem("WednesdayLunch");

    var WednesdayDinnerTitle = localStorage.getItem("WednesdayDinner");

    var ThursdayBreakfastTitle = localStorage.getItem("ThursdayBreakfast");

    var ThursdayLunchTitle = localStorage.getItem("ThursdayLunch");

    var ThursdayDinnerTitle = localStorage.getItem("ThursdayDinner");

    var FridayBreakfastTitle = localStorage.getItem("FridayBreakfast");

    var FridayLunchTitle = localStorage.getItem("FridayLunch");

    var FridayDinnerTitle = localStorage.getItem("FridayDinner");

    var SaturdayBreakfastTitle = localStorage.getItem("SaturdayBreakfast");

    var SaturdayLunchTitle = localStorage.getItem("SaturdayLunch");

    var SaturdayDinnerTitle = localStorage.getItem("SaturdayDinner");

    var SundayBreakfastTitle = localStorage.getItem("SundayBreakfast");

    var SundayLunchTitle = localStorage.getItem("SundayLunch");

    var SundayDinnerTitle = localStorage.getItem("SundayDinner");

    //chef local gets

    var MondayBreakfastChef = localStorage.getItem("MondayBreakfastChefChoice");
    
    var MondayLunchChef = localStorage.getItem("MondayLunchChefChoice");
    
    var MondayDinnerChef = localStorage.getItem("MondayDinnerChefChoice");

    var TuesdayBreakfastChef = localStorage.getItem("TuesdayBreakfastChefChoice");
    
    var TuesdayLunchChef = localStorage.getItem("TuesdayLunchChefChoice");
    
    var TuesdayDinnerChef = localStorage.getItem("TuesdayDinnerChefChoice");

    var WednesdayBreakfastChef = localStorage.getItem("WednesdayBreakfastChefChoice");
    
    var WednesdayLunchChef = localStorage.getItem("WednesdayLunchChefChoice");
    
    var WednesdayDinnerChef = localStorage.getItem("WednesdayDinnerChefChoice");

    var ThursdayBreakfastChef = localStorage.getItem("ThursdayBreakfastChefChoice");
    
    var ThursdayLunchChef = localStorage.getItem("ThursdayLunchChefChoice");
    
    var ThursdayDinnerChef = localStorage.getItem("ThursdayDinnerChefChoice");

    var FridayBreakfastChef = localStorage.getItem("FridayBreakfastChefChoice");
    
    var FridayLunchChef = localStorage.getItem("FridayLunchChefChoice");
    
    var FridayDinnerChef = localStorage.getItem("FridayDinnerChefChoice");

    var SaturdayBreakfastChef = localStorage.getItem("SaturdayBreakfastChefChoice");
    
    var SaturdayLunchChef = localStorage.getItem("SaturdayLunchChefChoice");
    
    var SaturdayDinnerChef = localStorage.getItem("SaturdayDinnerChefChoice");

    var SundayBreakfastChef = localStorage.getItem("SundayBreakfastChefChoice");
    
    var SundayLunchChef = localStorage.getItem("SundayLunchChefChoice");
    
    var SundayDinnerChef = localStorage.getItem("SundayDinnerChefChoice");

    



    //ingredients local gets

    var MondayBreakfastIngredients = localStorage.getItem("MondayBreakfastIngredients");

    var MondayLunchIngredients = localStorage.getItem("MondayLunchIngredients");

    var MondayDinnerIngredients = localStorage.getItem("MondayDinnerIngredients");

    var TuesdayBreakfastIngredients = localStorage.getItem("TuesdayBreakfastIngredients");

    var TuesdayLunchIngredients = localStorage.getItem("TuesdayLunchIngredients");

    var TuesdayDinnerIngredients = localStorage.getItem("TuesdayDinnerIngredients");

    var WednesdayBreakfastIngredients = localStorage.getItem("WednesdayBreakfastIngredients");

    var WednesdayLunchIngredients = localStorage.getItem("WednesdayLunchIngredients");

    var WednesdayDinnerIngredients = localStorage.getItem("WednesdayDinnerIngredients");

    var ThursdayBreakfastIngredients = localStorage.getItem("ThursdayBreakfastIngredients");

    var ThursdayLunchIngredients = localStorage.getItem("ThursdayLunchIngredients");

    var ThursdayDinnerIngredients = localStorage.getItem("ThursdayDinnerIngredients");

    var FridayBreakfastIngredients = localStorage.getItem("FridayBreakfastIngredients");

    var FridayLunchIngredients = localStorage.getItem("FridayLunchIngredients");

    var FridayDinnerIngredients = localStorage.getItem("FridayDinnerIngredients");

    var SaturdayBreakfastIngredients = localStorage.getItem("SaturdayBreakfastIngredients");

    var SaturdayLunchIngredients = localStorage.getItem("SaturdayLunchIngredients");

    var SaturdayDinnerIngredients = localStorage.getItem("SaturdayDinnerIngredients");

    var SundayBreakfastIngredients = localStorage.getItem("SundayBreakfastIngredients");

    var SundayLunchIngredients = localStorage.getItem("SundayLunchIngredients");

    var SundayDinnerIngredients = localStorage.getItem("SundayDinnerIngredients");

    //instruction local gets

    var MondayBreakfastInstructions = JSON.parse(localStorage.getItem("MondayBreakfastInstructions"));

    var MondayLunchInstructions= JSON.parse(localStorage.getItem("MondayLunchInstructions"));

    var MondayDinnerInstructions = JSON.parse(localStorage.getItem("MondayDinnerInstructions"));

    var TuesdayBreakfastInstructions = JSON.parse(localStorage.getItem("TuesdayBreakfastInstructions"));

    var TuesdayLunchInstructions = JSON.parse(localStorage.getItem("TuesdayLunchInstructions"));

    var TuesdayDinnerInstructions = JSON.parse(localStorage.getItem("TuesdayDinnerInstructions"));

    var WednesdayBreakfastInstructions = JSON.parse(localStorage.getItem("WednesdayBreakfastInstructions"));

    var WednesdayLunchInstructions = JSON.parse(localStorage.getItem("WednesdayLunchInstructions"));

    var WednesdayDinnerInstructions = JSON.parse(localStorage.getItem("WednesdayDinnerInstructions"));

    var ThursdayBreakfastInstructions = JSON.parse(localStorage.getItem("ThursdayBreakfastInstructions"));

    var ThursdayLunchInstructions = JSON.parse(localStorage.getItem("ThursdayLunchInstructions"));

    var ThursdayDinnerInstructions = JSON.parse(localStorage.getItem("ThursdayDinnerInstructions"));

    var FridayBreakfastInstructions = JSON.parse(localStorage.getItem("FridayBreakfastInstructions"));

    var FridayLunchInstructions = JSON.parse(localStorage.getItem("FridayLunchInstructions"));

    var FridayDinnerInstructions = JSON.parse(localStorage.getItem("FridayDinnerInstructions"));

    var SaturdayBreakfastInstructions = JSON.parse(localStorage.getItem("SaturdayBreakfastInstructions"));

    var SaturdayLunchInstructions = JSON.parse(localStorage.getItem("SaturdayLunchInstructions"));

    var SaturdayDinnerInstructions = JSON.parse(localStorage.getItem("SaturdayDinnerInstructions"));

    var SundayBreakfastInstructions = JSON.parse(localStorage.getItem("SundayBreakfastInstructions"));

    var SundayLunchInstructions = JSON.parse(localStorage.getItem("SundayLunchInstructions"));

    var SundayDinnerInstructions = JSON.parse(localStorage.getItem("SundayDinnerInstructions"));

    //this preps to put the text into empty p tags

var ingredsP = $("<p>");
var instructP = $("<p>");


//If statements determining what recipe to use corresponding to the day and time
if (day === "Monday" && time <= 9) {
    dish = MondayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(MondayBreakfastIngredients);
    instructP.text(MondayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + MondayBreakfastTitle);
    $("#chefName").text("Chef: " + MondayBreakfastChef);
    if (MondayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (MondayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (MondayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (MondayBreakfastChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}
if (day === "Monday" && time <= 15 && time > 9) {
    dish = MondayLunchMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(MondayLunchIngredients);
    instructP.text(MondayLunchInstructions[0].steps);
    $(".mealText").html("&nbsp;" + MondayLunchTitle);
    $("#chefName").text("Chef: " + MondayLunchChef);
    if (MondayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (MondayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (MondayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (MondayLunchChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }

}

if (day === "Monday" && time > 15) {
    dish = MondayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(MondayDinnerIngredients);
    instructP.text(MondayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + MondayDinnerTitle);
    $("#chefName").text("Chef: " + MondayDinnerChef);
    if (MondayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (MondayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (MondayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (MondayDinnerChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Tuesday" && time <= 9) {
    dish = TuesdayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(TuesdayBreakfastIngredients);
    instructP.text(TuesdayBreakfastInstructions[0].steps); 
    $(".mealText").html("&nbsp;" + TuesdayBreakfastTitle);
    $("#chefName").text("Chef: " + TuesdayBreakfastChef);
    if (TuesdayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (TuesdayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (TuesdayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (TuesdayBreakfastChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Tuesday" && time <= 15 && time > 9) {
    dish = TuesdayLunchMealChoice;
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(TuesdayLunchIngredients);
    instructP.text(TuesdayLunchInstructions[0].steps);
    $(".mealText").html("&nbsp;" + TuesdayLunchTitle);    
    $("#chefName").text("Chef: " + TuesdayLunchChef);
    if (TuesdayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (TuesdayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (TuesdayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (TuesdayLunchChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Tuesday" && time > 15) {
    dish = TuesdayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(TuesdayDinnerIngredients);
    instructP.text(TuesdayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + TuesdayDinnerTitle);
    $("#chefName").text("Chef: " + TuesdayDinnerChef);
    if (TuesdayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (TuesdayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (TuesdayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (TuesdayDinnerChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}


if (day === "Wednesday" && time <= 9) {
    dish = WednesdayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(WednesdayBreakfastIngredients);
    instructP.text(WednesdayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + WednesdayBreakfastTitle);
    $("#chefName").text("Chef: " + WednesdayBreakfastChef);
    if (WednesdayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (WednesdayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (WednesdayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (WednesdayBreakfastChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}


if (day === "Wednesday" && time <= 15 && time > 9) {
    dish = WednesdayLunchMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(WednesdayLunchIngredients);
    instructP.text(WednesdayLunchInstructions[0].steps);
    $(".mealText").html("&nbsp;" + WednesdayLunchTitle);
    $("#chefName").text("Chef: " + WednesdayLunchChef);
    if (WednesdayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (WednesdayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (WednesdayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (WednesdayLunchChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Wednesday" && time > 15) {
    dish = WednesdayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(WednesdayDinnerIngredients);
    instructP.text(WednesdayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + WednesdayDinnerTitle);
    $("#chefName").text("Chef: " + WednesdayDinnerChef);
    if (WednesdayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (WednesdayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (WednesdayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (WednesdayDinnerChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Thursday" && time <= 9) {
    dish = ThursdayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(ThursdayBreakfastIngredients);
    instructP.text(ThursdayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + ThursdayBreakfastTitle);
    $("#chefName").text("Chef: " + ThursdayBreakfastChef);
    if (ThursdayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (ThursdayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (ThursdayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (ThursdayBreakfastChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Thursday" && (time <= 15 && time > 9)) {
    dish = ThursdayLunchMealChoice;  
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(ThursdayLunchIngredients);
    instructP.text(ThursdayLunchInstructions[0].steps);
    $(".mealText").html("&nbsp;" + ThursdayLunchTitle );
    $("#chefName").text("Chef: " + ThursdayLunchChef);
    if (ThursdayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    if (ThursdayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    if (ThursdayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    if (ThursdayLunchChef === "Tingting"){
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Thursday" && time > 15) {
    dish = ThursdayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(ThursdayDinnerIngredients);
    instructP.text(ThursdayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + ThursdayDinnerTitle);
    $("#chefName").text("Chef: " + ThursdayDinnerChef);
    if (ThursdayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (ThursdayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(ThursdayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (ThursdayDinnerChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Friday" && time <= 9) {
    dish = FridayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(FridayBreakfastIngredients);
    instructP.text(FridayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + FridayBreakfastTitle);
    $("#chefName").text("Chef: " + FridayBreakfastChef);
    if (FridayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (FridayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(FridayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (FridayBreakfastChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Friday" && time <= 15 && time > 9) {
    dish = FridayLunchMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(FridayLunchIngredients);
    instructP.text(FridayLunchInstructions[0].steps);
        dish = FridayLunchMealChoice; 
        if (dish === null){
            $("#dishName").text("Click to change the gif!")
        }
    $(".mealText").html("&nbsp;" + FridayLunchTitle);
    $("#chefName").text("Chef: " + FridayLunchChef);
    if (FridayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (FridayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(FridayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (FridayLunchChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Friday" && time > 15) {
    dish = FridayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(FridayDinnerIngredients);
    instructP.text(FridayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + FridayDinnerTitle);
    $("#chefName").text("Chef: " + FridayDinnerChef);
    if (FridayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (FridayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(FridayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (FridayDinnerChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Saturday" && time <= 9) {
    dish = SaturdayBreakfastMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SaturdayBreakfastIngredients);
    instructP.text(SaturdayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + SaturdayBreakfastTitle);
    $("#chefName").text("Chef: " + SaturdayBreakfastChef);
    if (SaturdayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SaturdayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SaturdayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SaturdayBreakfastChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Saturday" && time <= 15 && time > 9) {
    dish = SaturdayLunchMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SaturdayLunchIngredients);
    instructP.text(SaturdayLunchInstructions[0].steps);
    $(".mealText").html("&nbsp;" + SaturdayLunchTitle);
    $("#chefName").text("Chef: " + SaturdayLunchChef);
    if (SaturdayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SaturdayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SaturdayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SaturdayLunchChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Saturday" && time > 15) {
    dish = SaturdayDinnerMealChoice;  
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SaturdayDinnerIngredients);
    instructP.text(SaturdayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + SaturdayDinnerTitle);
    $("#chefName").text("Chef: " + SaturdayDinnerChef);
    if (SaturdayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SaturdayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SaturdayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SaturdayDinnerChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Sunday" && time <= 9) {
    dish = SundayBreakfastMealChoice;  
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SundayBreakfastIngredients);
    instructP.text(SundayBreakfastInstructions[0].steps);
    $(".mealText").html("&nbsp;" + SundayBreakfastTitle);
    $("#chefName").text("Chef: " + SundayBreakfastChef);
    if (SundayBreakfastChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SundayBreakfastChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SundayBreakfastChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SundayBreakfastChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Sunday" && time <= 15 && time > 9) {
    dish = SundayLunchMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SundayLunchIngredients);
    instructP.text(SundayLunchInstructions[0].steps); 
    $(".mealText").html("&nbsp;" + SundayLunchTitle);
    $("#chefName").text("Chef: " + SundayLunchChef);
    if (SundayLunchChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SundayLunchChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SundayLunchChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SundayLunchChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}

if (day === "Sunday" && time > 15) {
    dish = SundayDinnerMealChoice; 
    if (dish === null){
            
        $("#dishName").html("");
    }
    ingredsP.text(SundayDinnerIngredients);
    instructP.text(SundayDinnerInstructions[0].steps);
    $(".mealText").html("&nbsp;" + SundayDinnerTitle);
    $("#chefName").text("Chef: " + SundayDinnerChef);
    if (SundayDinnerChef === "Joe"){
        $(".chef").attr("src", "assets/TT Images/joechef.png")
    }
    else if (SundayDinnerChef === "Anna"){
        $(".chef").attr("src", "assets/TT Images/annachef.png")
    }
    else if(SundayDinnerChef === "Oleksandr"){
        $(".chef").attr("src", "assets/TT Images/alexchef.png")
    }
    else if (SundayDinnerChef === "Tingting") {
        $(".chef").attr("src", "assets/TT Images/ttchef.png")
    }
}
///Ends if statements


$(".ingredientsList").html(ingredsP);
$(".instructionsList").html(instructP)

//This section determines the giphy image using the dish variable defined above. It makes it so that a new gif is picked everytime you click on the image
var i = 0;   
function showGif(){
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  var imageUrl = response.data[i].images.fixed_height.url;
        var gif = $("<img>");
        gif.attr("src", imageUrl);
        gif.attr("alt", "Meal Image");
        gif.attr("class", "giphy");
        $("#images").html(gif);
  });
}

showGif();

$("#images").on("click", function(event){
    event.preventDefault();

    var newI = i++;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
  
    $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  var imageUrl = response.data[newI].images.fixed_height.url;
        var gif = $("<img>");
        gif.attr("src", imageUrl);
        gif.attr("alt", "Meal Image");
        $("#images").html(gif);
  });
});
