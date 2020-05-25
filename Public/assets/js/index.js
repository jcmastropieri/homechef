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

    console.log(MondayBreakfastTitle);



    // Monday Breakfast
    var inputMonBId = $("#inputMonB")
    inputMonBId.attr("placeholder", MondayBreakfastTitle);


$("#btn-MB").on("click", function(event){
    event.preventDefault();
    var newChoiceMonBre = $(".inputMB").val();
    // var inputMonBId = $("#inputMonB")
    // inputMonBId.attr("placeholder", MondayBreakfastTitle);

    $(".inputMB").attr("id", "monBre");
    localStorage.setItem("Mon-Breakfast", newChoiceMonBre);
    
});


    // Monday Lunch

    var inputMonLId = $("#inputMonL")
    inputMonLId.attr("placeholder", MondayLunchTitle);


$("#btn-ML").on("click", function(){
    event.preventDefault();
    var newChoiceMonLun = $(".inputML").val();
    

    $("#btn-ML").attr("id", "monLun");
    localStorage.setItem("Mon-Lunch", newChoiceMonLun);
    
});


    // Monday Dinner
    var inputMonDId = $("#inputMonD")
    inputMonDId.attr("placeholder", MondayDinnerTitle);


$("#btn-MD").on("click", function(){
    event.preventDefault();
    var newChoiceMonDin = $(".inputMD").val();
    

    $("#btn-MD").attr("id", "monDin");
    localStorage.setItem("Mon-Dinner", newChoiceMonDin)
    
});






// Tuesday Buttons


// Tueday Breakfast

var inputTueBId = $("#inputTueB")
inputTueBId.attr("placeholder", TuesdayBreakfastTitle)

$("#btn-TB").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTB").val();
    

    $("#btn-TB").attr("id", "tueBre");
    localStorage.setItem("Tue-Breakfast", newChoiceTueBre);
});




// Tuesday Lunch

var inputTueLId = $("#inputTueL")
inputTueLId.attr("placeholder", TuesdayLunchTitle )


$("#btn-TL").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTL").val();
    

    $("#btn-TL").attr("id", "tueLun");
    localStorage.setItem("Tue-Lunch", newChoiceTueBre);
});



// Tuesday Dinner 

var inputTueDId = $("#inputTueD")
inputTueDId.attr("placeholder", TuesdayDinnerTitle )


$("#btn-TD").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTD").val();
    

    $("#btn-TD").attr("id", "tueDin");
    localStorage.setItem("Tue-Dinner", newChoiceTueBre);
});




// Wednesday Buttons


// Wednesday Breakfast


var inputWedBId = $("#inputWedB")
inputWedBId.attr("placeholder", WednesdayBreakfastTitle )


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceWedBre = $(".inputWD").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceWedBre);
});


// Wednesday Lunch
var inputWedLId = $("#inputWedL")
inputWedLId.attr("placeholder", WednesdayLunchTitle )


$("#btn-WL").on("click", function(){
    event.preventDefault();
    var newChoiceWedLun = $(".inputWL").val();
    

    $("#btn-WL").attr("id", "wedLun");
    localStorage.setItem("Wed-Lunch", newChoiceWedLun);
});


// Wednesday Dinner

var inputWedDId = $("#inputWedD")
inputWedDId.attr("placeholder", WednesdayDinnerTitle )


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceWedDin = $(".inputWD").val();
    

    $("#btn-WD").attr("id", "wedLun");
    localStorage.setItem("Wed-Dinner", newChoiceWedDin);
});


// Thursday buttons


// Thursday Breakfast

var inputThuBId = $("#inputThuB")
inputThuBId.attr("placeholder", ThursdayBreakfastTitle )


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceThuBre = $(".inputThD").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceThuBre);
});


// Thursday Lunch

var inputThuLId = $("#inputThuL")
inputThuLId.attr("placeholder", ThursdayLunchTitle )


$("#btn-ThL").on("click", function(){
    event.preventDefault();
    var newChoiceThuLun = $(".inputThL").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceThuLun);
});


//  Thursday Dinner 

var inputThuDId = $("#inputThuD")
inputThuDId.attr("placeholder", ThursdayDinnerTitle )


$("#btn-ThD").on("click", function(){
    event.preventDefault();
    var newChoiceThuDin = $(".inputThD").val();
    

    $("#btn-ThD").attr("id", "thuBre");
    localStorage.setItem("Thu-Dinner", newChoiceThuDin);
});



// Friday Buttons

// Friday Breakfast


var inputFriBId = $("#inputFriB")
inputFriBId.attr("placeholder", FridayBreakfastTitle )


$("#btn-FB").on("click", function(){
    event.preventDefault();
    var newChoiceFriBre = $(".inputFD").val();
    

    $("#btn-FB").attr("id", "friBre");
    localStorage.setItem("Fri-Breakfast", newChoiceFriBre);
});

// Friday Lunch
var inputFriLId = $("#inputFriL")
inputFriLId.attr("placeholder", FridayLunchTitle )


$("#btn-FL").on("click", function(){
    event.preventDefault();
    var newChoiceFriLun = $(".inputFL").val();
    

    $("#btn-FL").attr("id", "friLun");
    localStorage.setItem("Fri-Lunch", newChoiceFriLun);
});


// Friday Dinner
var inputFriDId = $("#inputFriD")
inputFriDId.attr("placeholder", FridayDinnerTitle )


$("#btn-FD").on("click", function(){
    event.preventDefault();
    var newChoiceFriDin = $(".inputFD").val();
    

    $("#btn-FD").attr("id", "friDin");
    localStorage.setItem("Fri-Dinner", newChoiceFriDin);
});



// Saturday Buttons

// Saturday Breakfast

var inputSatBId = $("#inputSatB")
inputSatBId.attr("placeholder", SaturdayBreakfastTitle )


$("#btn-SaB").on("click", function(){
    event.preventDefault();
    var newChoiceSatBre = $(".inputSTD").val();
    

    $("#btn-FB").attr("id", "friBre");
    localStorage.setItem("Sat-Breakfast", newChoiceSatBre);
});

// Saturday Lunch


var inputSatLId = $("#inputSatL")
inputSatLId.attr("placeholder", SaturdayLunchTitle )


$("#btn-SaL").on("click", function(){
    event.preventDefault();
    var newChoiceSatLun = $(".inputSTL").val();
    

    $("#btn-SaL").attr("id", "satLun");
    localStorage.setItem("Sat-Lunch", newChoiceSatLun);
});


// Saturday Dinner


var inputSatDId = $("#inputSatD")
inputSatDId.attr("placeholder", SaturdayDinnerTitle )


$("#btn-SaD").on("click", function(){
    event.preventDefault();
    var newChoiceSatDin = $(".inputSTD").val();
    

    $("#btn-SaD").attr("id", "satLDin");
    localStorage.setItem("Sat-Dinner", newChoiceSatDin);
});



// Sunday Buttons


// Sunday Breakfast

var inputSunBId = $("#inputSunB")
inputSunBId.attr("placeholder", SundayBreakfastTitle )


$("#btn-SuB").on("click", function(){
    event.preventDefault();
    var newChoiceSunBre = $(".inputSUB").val();
    

    $("#btn-SuB").attr("id", "sunBre");
    localStorage.setItem("Sun-Breakfast", newChoiceSunBre);
});


// Sunday Lunch


var inputSunLId = $("#inputSunL")
inputSunLId.attr("placeholder", SundayLunchTitle )


$("#btn-SuL").on("click", function(){
    event.preventDefault();
    var newChoiceSunLun = $(".inputSUL").val();
    

    $("#btn-SuL").attr("id", "sunLun");
    localStorage.setItem("Sun-Lunch", newChoiceSunLun);
});



// Sunday Dinner

var inputSunDId = $("#inputSunD")
inputSunDId.attr("placeholder", SundayDinnerTitle )


$("#btn-SuD").on("click", function(){
    event.preventDefault();
    var newChoiceSunDin = $(".inputSUD").val();
    

    $("#btn-SuD").attr("id", "sunDin");
    localStorage.setItem("Sun-Dinner", newChoiceSunDin);
    
});













// $("#btn-TL").on("click", function(){
//     event.preventDefault();
//     var newChoiceTueLun = $(".inputTL").val();
    

//     $("#btn-TL").attr("id", "tueLun");
//     localStorage.setItem("Tue-Lunch", newChoiceTueLun);
//     console.log(newChoiceTueLun);
    
// });

// $("#btn-TD").on("click", function(){
//     event.preventDefault();
//     var newChoiceTueDin = $(".inputTD").val();
    

//     $("#btn-TD").attr("id", "tueDin");
//     localStorage.setItem("Tue-Dinner", newChoiceTueDin)
//     console.log(newChoiceTueDin);
    
// });


