///display.innnertext is good way

let string = "";

let buttons = document.querySelectorAll(".button");
console.log(buttons);
var wholeFunction = function() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      let whichButton = e.target.innerHTML;

      switch (whichButton) {
        case "=":

          try {
            string = eval(string);   ///eavl reall execute any type of javascript code
            document.querySelector('input').value = string;
          }
          catch {
            document.querySelector('input').value = "Error:Unexpected Tokens";
            document.querySelector('input').value = "";
            string = ""
          }
          break;
        case "C":
          string = "";
          document.querySelector('input').value = string;
          break;

        case "←":
          string = string.toString();  ///if not string 
          if (string == "Infinity" || "Error:Unexpected Tokens") {
            string = "";
          } else {
            string = string.substring(0, string.length - 1);
          }   /////slice(0,-1)
          document.querySelector('input').value = string;
          break;

        default:
          console.log(e.target.innerHTML);
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
          break;

      }

    })
  })
}
wholeFunction();
