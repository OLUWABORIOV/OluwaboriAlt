let screen = document.getElementById("screen");
let buttons = Array.from(document.getElementsByClassName("button"));
let themeSwitch = document.getElementById("theme-switch");
let body = document.body;



function evalExpression(expression) {
    // Use the Function constructor to safely evaluate the expression
    return Function('"use strict";return (' + expression + ")")();
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
  
  // Initially, set a default theme (e.g., light)
  //calculator.classList.add("light-theme");
  
  // Add a click event listener to the theme switch button
  themeSwitch.addEventListener("click", () => {
    toggleTheme();
  });

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        screen.innerText = "";
        break;
      case "C":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          screen.innerText = evalExpression(screen.innerText);
        } catch (error) {
          screen.innerText = "Error";
        }
        break;
      case "+/-":
        if (screen.innerText.startsWith("-")) {
          screen.innerText = screen.innerText.substring(1);
        } else {
          screen.innerText = "-" + screen.innerText;
        }
        break;
      case "%":
        // Divide the current number by 100 to calculate the percentage
        try {
          screen.innerText = (parseFloat(screen.innerText) / 100).toString();
        } catch (error) {
          screen.innerText = "Error";
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});


