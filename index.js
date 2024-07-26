// Log "hitesh" to the console
// console.log("hitesh");

// Select all elements with the class "button" and store them in the 'buttons' variable
const buttons = document.querySelectorAll(".button");

// Select the body element and store it in the 'body' variable
const body = document.querySelector("body");

// Iterate over each button element
buttons.forEach(function (button) {
  // Log the button element to the console (commented out)
  // console.log(button);

  // Add a click event listener to each button
  button.addEventListener("click", function (e) {
    // Log the event object to the console (commented out)
    // console.log(e);
    // Log the event target (the clicked element) to the console (commented out)
    // console.log(e.target);

    // Check the ID of the clicked button and change the body's background color accordingly
    if (e.target.id === "red") {
      document.body.style.backgroundColor = "red";
    } else if (e.target.id === "green") {
      document.body.style.backgroundColor = "green";
    } else if (e.target.id === "blue") {
      document.body.style.backgroundColor = "blue";
    } else if (e.target.id === "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else if (e.target.id === "purple") {
      document.body.style.backgroundColor = "purple";
    } else if (e.target.id === "orange") {
      document.body.style.backgroundColor = "orange";
    } else if (e.target.id === "pink") {
      document.body.style.backgroundColor = "pink";
    } else if (e.target.id === "brown") {
      document.body.style.backgroundColor = "brown";
    } else if (e.target.id === "black") {
      document.body.style.backgroundColor = "black";
    } else if (e.target.id === "white") {
      document.body.style.backgroundColor = "white";
    } else if (e.target.id === "grey") {
      document.body.style.backgroundColor = "grey";
    } else if (e.target.id === "cyan") {
      document.body.style.backgroundColor = "cyan";
    } else if (e.target.id === "magenta") {
      document.body.style.backgroundColor = "magenta";
    } else if (e.target.id === "lime") {
      document.body.style.backgroundColor = "lime";
    } else if (e.target.id === "maroon") {
      document.body.style.backgroundColor = "maroon";
    } else if (e.target.id === "navy") {
      document.body.style.backgroundColor = "navy";
    } else if (e.target.id === "olive") {
      document.body.style.backgroundColor = "olive";
    } else if (e.target.id === "teal") {
      document.body.style.backgroundColor = "teal";
    } else if (e.target.id === "indigo") {
      document.body.style.backgroundColor = "indigo";
    } else if (e.target.id === "violet") {
      document.body.style.backgroundColor = "violet";
    } else if (e.target.id === "gold") {
      document.body.style.backgroundColor = "gold";
    } else if (e.target.id === "silver") {
      document.body.style.backgroundColor = "silver";
    } else if (e.target.id === "coral") {
      document.body.style.backgroundColor = "coral";
    } else if (e.target.id === "turquoise") {
      document.body.style.backgroundColor = "turquoise";
    } else if (e.target.id === "salmon") {
      document.body.style.backgroundColor = "salmon";
    } else if (e.target.id === "khaki") {
      document.body.style.backgroundColor = "khaki";
    } else if (e.target.id === "plum") {
      document.body.style.backgroundColor = "plum";
    }
  });
});
