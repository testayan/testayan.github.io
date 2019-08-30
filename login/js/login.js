function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    window.alert("Logedin")
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }