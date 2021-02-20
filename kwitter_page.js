//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDZ8lVez21smE8ZS4weSvvWSXB6laapUx8",
      authDomain: "kwitter-887bf.firebaseapp.com",
      databaseURL: "https://kwitter-887bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-887bf",
      storageBucket: "kwitter-887bf.appspot.com",
      messagingSenderId: "727120124017",
      appId: "1:727120124017:web:c02a7887c04d4d451523d0",
      measurementId: "G-6WY6EPVJHS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}
var u_name=localStorage.getItem("username");
var room_name=localStorage.getItem("ROOM_NAME");
function send(){
      var m=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
         name:u_name,
         message:m,
         like:0   
      });
      document.getElementById("message").value=" ";
}