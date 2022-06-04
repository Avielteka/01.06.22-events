// // event 1
// function printmess(){
//     alert("hello lior");
// }


// // event 2
// function printName(){
//     console.log("Aviel Teka");
// }


// // event 3
// function changeColor(){
//     var ttt = document.getElementById("spa")
//     ttt.style.color = "red";
// }


// // event 4
// function changeSize(){
//     var aaa = document.getElementById("h_one")
//     aaa.style.fontSize = "100px";
// }

// // event 5
// function changeCon(){
//     var ccc = document.getElementById("h_1")
//     ccc.innerText = ("no apple");   
// }



// // event 6
// var c = prompt("what's your name");
// function clickName(){
    
//     var t = document.getElementById("username");
//     document.body.innerHTML= c;
// }


// // event 7
// function dayNight(){
//     // var c = document.getElementById("h_1")
//     var nowTime = new Date();
//     var hour = nowTime
//     if(nowTime.getHours() < 12){
//         document.body.style.backgroundColor = "yellow";
//         document.body.innerHTML =("have a good evening")
//     }else{
//         document.body.style.backgroundColor = "blue";
//         document.body.innerHTML = ("have a good day")

//     }
// }
// dayNight()
 
// // event 8

// function printSome(){
//     var messageText = document.getElementById("welcomeMessage")
// messageText.onmouseover= function(){
//     messageText.style.color = "green";   
// }
//     var userAge = prompt("enter age")
//     if(userAge>18){
//         messageText.innerText = "welcome tedi";
//         messageText.style.color = "red";
        
//     }else{
//         messageText.innerText = "welcome tedi";
//         messageText.style.color = "blue";

//     }
// }
// printSome()

// // EVENT 9

// function add(){
//     var userInput = document.getElementById("numUser").value;
//     var pTag = document.getElementById("welcomeMessage");
//     var randomP=document.getElementById("randomValue");
//     pTag.innerHTML += "<p>"+ userInput + "</p> ";
//     if(pTag.children.length >= 5){
//       var randomNum=Math.floor(Math.random()*57);
//       var randomNum=20;
//       randomP.innerHTML=randomNum;
//       for(i=0;i<pTag.children.length;i++){
//          if( pTag.children[i].innerHTML==randomNum ){
//              alert("win number is: "+  pTag.children[i].innerHTML );
//              break;
//          }
//          if(i==pTag.children.length){
//             alert("no win number is: "+ randomNum );

//          }

          
//       }

//     }
    
// }




