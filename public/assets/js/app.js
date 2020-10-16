
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDCQZZeJ3oDTigagX8xEUC50ovfZM1Ui_Y",
    authDomain: "credia-landingpage.firebaseapp.com",
    databaseURL: "https://credia-landingpage.firebaseio.com",
    projectId: "credia-landingpage",
    storageBucket: "credia-landingpage.appspot.com",
    messagingSenderId: "686804513372",
    appId: "1:686804513372:web:2f21de555e90e21901ac99",
    measurementId: "G-T0G389PDEV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  //firebase.database().ref('register');
  
  // Listen for submit event
  document.getElementById('chimp-email').addEventListener('submit', formSubmit);

  //Submit form
  function formSubmit(e) {
    e.preventDefault();
    //Get DOM Values
    let email = document.querySelector('#chimp-email-address').value;
    //Send message values
    sendMessage(email);
    document.querySelector('#chimp-email-address').value="";
  }


  //Form Reset After Submission
 
  //document.getElementById('#chimp-email-address').reset();

  function sendMessage(email){
      db.collection('register').add({
          email: email
      }).then(function(){
          emailjs.sendForm('gmail', 'template_fOXiEoBq', this);
      })
  }
