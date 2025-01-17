const firebaseConfig = {
    //   copy your firebase config informations

   
    apiKey: "AIzaSyBQHd_twRFIVVqXiOYx0Ns5Eh7mHswvfzM",
    authDomain: "fire-2a660.firebaseapp.com",
    databaseURL: "https://fire-2a660-default-rtdb.firebaseio.com",
    projectId: "fire-2a660",
    storageBucket: "fire-2a660.firebasestorage.app",
    messagingSenderId: "546091681446",
    appId: "1:546091681446:web:c8e67936b78e27df999667"
      
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    // var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
 // Validation to check if both fields are filled
 if (name.trim() === "" || msgContent.trim() === "") {
  document.getElementById("error-message").style.display = "block";

   // Hide error message after 3 seconds
   setTimeout(() => {
    document.getElementById("error-message").style.display = "none";
}, 5000);
  // alert("Please fill in both fields before submitting.");
  return; // Stop the form submission
}

// Hide error message if both fields are filled
document.getElementById("error-message").style.display = "none";









    saveMessages(name,  msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name,msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      // emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };