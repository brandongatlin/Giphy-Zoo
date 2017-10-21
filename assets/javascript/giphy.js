var animalsArray = ["fox", "dog", "cat", "penguin", "elephant", "squirrel", "frog", "bird", "lion", "parrot"];

console.log(animalsArray)

function alertAnimalName() {
        var animalName = $(this).attr("data-name");

        alert(animalName);
      }

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

        // Adding the movie from the textbox to our array
        animalArray.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

      // Function for displaying the movie info
      // We're adding a click event listener to all elements with the class "movie"
      // We're adding the event listener to the document because it will work for dynamically generated elements
      // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".animal", alertAnimalName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();