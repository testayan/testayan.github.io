firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = '../index.html';
    }
  });

function login(){

    var userEmail = document.getElementById("usnm").value;
    var userPass = document.getElementById("pswd").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(user=>{
        window.location = '../index.html';
     } ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }