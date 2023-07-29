// function check() {
//   let password = document.getElementById("password");
//   let output = document.getElementById("output");

//   let message = password.value.length >= 8
//     ? "<span style='color: green'>Your password is safe!</span>"
//     : "<span style='color: red'>Your password is too short!</span>";

//     output.innerHTML = message;
// }

function check() {
    let password = document.getElementById("password");
    let output = document.getElementById("output");
  
    let message = password.value.length >= 8
      ? password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) && password.value.match(/[0-9]/)
        ? password.value.match(/[@#$%^&+=]/)
          ? "<span style='color: darkgreen'>Your password is very strong!</span>"
          : "<span style='color: green'>Your password is strong!</span>"
        : "<span style='color: orange'>Your password is medium!</span>"
      : "<span style='color: red'>Your password is too short!</span>";
  
    output.innerHTML = message;
  }


// The nested ternary operator in the check() function checks the following conditions in order:
// If the password length is greater than or equal to 8 characters.
// If the password contains at least one uppercase letter, one lowercase letter, and one digit.
// If the password contains at least one special character.
// If all three conditions are true, the message "Your password is very strong!" is displayed in green. If only the first two conditions are true, the message "Your password is strong!" is displayed in green. If only the first condition is true, the message "Your password is medium!" is displayed in orange. If none of the conditions are true, the message "Your password is too short!" is displayed in red.