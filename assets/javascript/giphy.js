var animalsArray = ["dog", "cat", "penguin", "elephant", "squirrel", "frog", "bird", "lion", "parrot"];

console.log(animalsArray)



// Function for displaying animal data
function renderButtons() {

    // Deleting the animal prior to adding new animal
    // (this is necessary otherwise we will have repeat buttons)
    $("#animalDump").empty();

    // Loop thru array to build buttons

    for (var i = 0; i < animalsArray.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of animal to our button
        a.addClass("animal");
        // Adding a data-attribute
        a.attr("data-name", animalsArray[i]);
        // Providing the initial button text
        a.text(animalsArray[i]);
        // Adding the button to the HTML
        $("#animalDump").append(a);


    }
}

// This function handles events where one button is clicked
$("#submit").on("click", function(event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();

    // This line grabs the input from the textbox
    var animal = $("#addAnimal").val().trim();
    if ((animal) === "") {
        alert("please add an animal!")
    }else {animalsArray.push(animal);}
    


    // Adding the animal from the textbox to our array
    

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

});


// Calling the renderButtons function to display the intial buttons
renderButtons();

//var APIKey = "garZqKF43Z1oYqEuQRR2Nr300rHn2n9r"
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=garZqKF43Z1oYqEuQRR2Nr300rHn2n9r&q=" + animalsArray + "&limit=25&offset=0&rating=G&lang=en"
//sample queryURL = "https://api.giphy.com/v1/gifs/search?api_key=garZqKF43Z1oYqEuQRR2Nr300rHn2n9r&q=dog&limit=25&offset=0&rating=G&lang=en"



// Here we run our AJAX call to the giffy API
function ajaxFunction() {
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .done(function(response) {


            console.log(queryURL);

            // Log the resulting object
            console.log(response);
            console.log(response.data[0].rating) // returning rating of gif

            // Transfer content to HTML
            //$("#gifDump").html("<p>" + response.data[0].rating + "</p>");
            $("#gifDump").html("<img src=" + response.data[0].images.fixed_height.url + "></img>");


        });
}
$(".animal").on("click", function() {
    ajaxFunction();
})

// testing