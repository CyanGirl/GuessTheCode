var code = [];
var repeat = 0;
for (var i = 0; i < 4; i++) {
  code.push(Math.floor(Math.random() * 9));
}
for (var i = 0; i < 4; i++) {
  if (code.indexOf(code[i]) >= 0 && i != code.indexOf(code[i])) {
    repeat += 1;
  }
}
if (repeat > 0) {
  document.getElementById("hint").innerHTML =
    "One digit appeared " + (repeat + 1) + " times";
} else {
  document.getElementById("hint").innerHTML =
    "All digits are unique! Guess hard!";
}
var attempts = 10;
document.getElementById("attempts").innerHTML =
  "Total Number of Attempts  : " + attempts;

function check() {
  attempts--;
  var correct = 0;
  var rightplace = 0;
  var val1 = document.getElementById("enter1").value;
  var val2 = document.getElementById("enter2").value;
  var val3 = document.getElementById("enter3").value;
  var val4 = document.getElementById("enter4").value;
  var val = [val1, val2, val3, val4];
  if (attempts <= 0) {
    alert(
      "You have reached maximum attempts! Refresh Again To Play! The code was " +
        code
    );
    document.getElementById("attempts").innerHTML = "No attempts left!";
    document.getElementById("hint").innerHTML = "";
    document.getElementById("result").innerHTML = "OOPS!";
    document.getElementById("get").innerHTML = "Refresh to Play Again!";
  } else {
    if (
      val[0] == code[0] &&
      val[1] == code[1] &&
      val[2] == code[2] &&
      val[3] == code[3]
    ) {
      alert("HURRAY!!");
      document.getElementById("hint").innerHTML = "";
      document.getElementById("result").innerHTML =
        "Congrats! You have solved the code!";
      document.getElementById("get").innerHTML = "Party Hard!!!";
    } else {
      rightplace = 0;
      correct = 0;
      for (let i = 0; i < 4; i++) {
        if (val[i] == code[i]) {
          rightplace += 1;
        }
        for (let j = 0; j < 4; j++) {
          if (code[i] == val[j]) {
            correct += 1;
          }
        }
      }
      document.getElementById("result").innerHTML = "OOPS!!!! Try Again! :-) ";
      document.getElementById("get").innerHTML =
        "HINTS: Digits guessed = " +
        correct +
        "  ||   Digits at correct places=  " +
        rightplace +
        " ||  Your last input was= " +
        val;
      document.getElementById("attempts").innerHTML =
        "Attempts left  : " + attempts;
    }
  }
}
