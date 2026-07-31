// User Registration


function register(){


let user={

name:
document.getElementById("username").value,


email:
document.getElementById("email").value,


password:
document.getElementById("password").value


};



localStorage.setItem(

"user",

JSON.stringify(user)

);


alert("Account Created");


}



// Login


function login(){


let user=
JSON.parse(localStorage.getItem("user"));



let email=
document.getElementById("loginEmail").value;



let password=
document.getElementById("loginPassword").value;



if(user.email==email &&
user.password==password){


alert("Login Successful");


location.href="meeting.html";


}

else{


alert("Wrong Details");


}


}




// Video Calling Demo


function startVideo(){


navigator.mediaDevices
.getUserMedia({

video:true,
audio:true

})


.then(stream=>{


document.getElementById("video")
.srcObject=stream;


})


}



// Screen Sharing


function shareScreen(){


navigator.mediaDevices
.getDisplayMedia({

video:true

})


.then(stream=>{


document.getElementById("video")
.srcObject=stream;


});


}



// File Sharing


function uploadFile(event){


let file=
event.target.files[0];


alert(

"File Shared: "
+file.name

);


}



// Whiteboard


let canvas=
document.getElementById("board");


if(canvas){


let ctx=
canvas.getContext("2d");


canvas.onmousemove=function(e){


if(e.buttons){


ctx.lineTo(
e.offsetX,
e.offsetY
);


ctx.stroke();


}


}


}



function clearBoard(){


if(canvas){

canvas.getContext("2d")
.clearRect(
0,
0,
canvas.width,
canvas.height
);

}

}




// Chat


function sendMessage(){


let msg=
document.getElementById("message")
.value;



document.getElementById("chat")
.innerHTML +=

"<p>👤 "+msg+"</p>";


}



// Encryption Demo


function encryptData(data){


return btoa(data);


}



function joinMeeting(){

location.href="meeting.html";

}
