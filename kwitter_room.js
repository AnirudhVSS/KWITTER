
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id=" + Room_names + " onclick='direct_roomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}

var u_name=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="WELCOME " + u_name + ", ";

function addRoom(){
      var r_name=document.getElementById("room_name").value;
      localStorage.setItem("ROOM_NAME", r_name);
      firebase.database().ref("/").child(r_name).update({
            purpose:"ADDING ROOM NAME"
      });
      window.location="kwitter_page.html";
}
function direct_roomname(a){
console.log(a);
localStorage.setItem("ROOM_NAME", a);
window.location="kwitter_page.html";
}