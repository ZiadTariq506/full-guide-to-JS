// import{M} from './script1';



// var title = "Mohamed";
// var t = "ziad";


// var x = 40, y = 30;
// var total = x * y;
// var res = x > y;
// var ageMazen=13.9;
// var ageMohaned=12;
// console.log(res);
// // document.write(title+"<br>");
// // document.write(title+"<hr>");
// // document.write(title);
// // var a = document.getElementById("1");
// // var b = document.getElementById("2");
// // var result = a + b;
// document.getElementById("rsult").innerHTML(result);
// console.log(total);
// // if (ageMazen==13){
// //     console.log("Mazen is 13 old");
// // }else if (ageMohaned==2){
// //     console.log("mohaned is 12 old");
// // }else{
// //     window.alert("Ziad is 20 years old");
// // }
// // Type of prints in js 
// // document.write(typeof(title));
// // window.alert(r);
// // console.log(title);
// switch(x){
//     case 50:
//         console.log("x = 50");
//     break;
//     case 30:
//         console.log("x = 30");
//     break;
//     case 20:
//         console.log("x = 20");
//     break;
//     default:
//         console.log("every thing is fale");
//     break;
// }
// // document.getElementById("h1").innerHTML = "gg";
// var x = 0;
// while(x<10){
//     x++;
//     document.write(x);
// }

// for(var y = 0; y < 10;y++){
//     document.write("<br>"+"huh")
// }
// var z = 0;
// do{
//     document.write(z+"<br>");
//     z++;
// }while(z<10)
// //function
// function we(){
//     console.log("welcome Ziad");
// }
// we();
// we();
// function ca(){
//     console.log("Use The Calcolater Ziad!!!!!!!!!!!")
//     switch(x){
//         case 50:
//             console.log("x = 50");
//         break;
//         case 30:
//             console.log("x = 30");
//         break;
//         case 20:
//             console.log("x = 20");
//         break;
//         default:
//             console.log("every thing is fale");
//         break;
//     }
// }
// ca();
//return function.
// function n(){
//     return 30;
// }
// console.log(30+n());
//void function.
// function m(){
//     console.log("Ziad");
// }
// m();
//function with parameter
// function z(x){
//     return x;
// }
// console.log( 40 + z(10));

// there are two waies for use onclick . 
//onclick = function (){
    // console.log("ziad"); 
// }

// document.getElementById("butt").onclick = function(){}

// function Cal(){
//     var x = Number(document.getElementById("num1").value);
//     var y = Number(document.getElementById("num2").value);
//     var op = document.getElementById("se").value;
//   switch(op){
//       case "+":
//         var rs = x + y;
//        break;
//        case "-":
//            var rs = x - y;
//         break;
//         case "*":
//             var rs = x * y;
//         break;
//         case "/":
//             var rs = x / y;
//         break;
//     }
//     document.getElementById("rsult").innerHTML = "ur result is : " + rs;
// }
// //other way to type a function 
// var h = function(){
//     console.log('test');
// }
// h();

// arry 

// var color = ["red","green","yellow"];
// var family = new Array("father","mother","brothers");
// console.log(color[0]); 
// console.log(family[1]);

// object are the same of array but 
// we can give them keies and access
// them by dot(.)

// here happened over write on th 30 value,

// var names = {n:"ziad",age:20, 30:40,"30":50 };
// console.log(names[30]);

// console.log(animals);
// while(z<=3){
//     document.getElementById("animal").innerHTML = animals;
//     z++;
// }

// if u want to but a li in ul 

// var animals = ["cat","dog","lion","Tiger"];
// var L = "";
// for(var i = 0;i < animals.length;i++){
//     L += "<li>" +animals[i] +"</li>";
// // }
// console.log(L);
// console.log(animals);
// document.getElementById("list").innerHTML = L;


// var name = "ziad";
// name += " Tariq";
// console.log(name);


//foreach is a solve for all the shit above.
var n = new Array("ziad","Mohamed","Mostafa");
// for(var i = 0;i < n.length;i++){
//     console.log(n[i]);
// }
//for each with array
var O = "";
var U = "";
n.forEach(function(value,key){
    O += "<li>"+value+"</li>";
    U += "<li>"+key+"</li>";
});
var age = [20,12,11,32];
document.getElementById("list").innerHTML = O + U;
//method with array 
console.log(n.toString());
var Y = n.toString();
console.log(n.join("*"));
//remove the last element
n.pop();
// remove from the first
n.shift();
//to add after the last 
n.push("Mohaned");
//to add in first
n.unshift("ZIAd");
// to combine two arraies
var h = n.concat(age);
//(rang) remove from index to index
n.splice(0,2);
console.log(h);
// document.getElementById("animal").innerHTML = Y;
// dom Gets...

// console.log(document.getElementsByClassName("Un"));
// console.log(document.getElementsByClassName("nU"));
// console.log(document.getElementsByTagName("div"));
// dom appliction 
// document.getElementById("Un").innerText = "<h1>ziad</h1>";
// document.getElementById("Un").style.color = "green";
// example
// function colors(c){
//     document.body.style.backgroundColor= c;
//     document.getElementsById("I").style.color(c);
// };

//dom event
//1
// document.getElementById("go").onclick= function(){
//     alert("ziad can u hear me ");
// }
var go = function() {
    alert("hiiiiiiiiiiiii");
}
var went = function(){
    console.log("Hi pro");
}
//2
// document.getElementById("txt").onkeydown = function(){
//     console.log("test");
// }
var x = 1;
// document.getElementById("txt").onkeypress = function(){
//     console.log("1");
// }
// document.getElementById("txt").onkeyup = function(){
//     console.log("1");
// }
// event 2
document.getElementById("txt").onkeyup = function(e){
    console.log(e);
}
//add & remove class 
document.getElementById("test").classList.add("text");
document.getElementById("test").classList.remove("text");
//bom0 مهم 
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop >=200){
        // document.getElementById("test").innerHTML = "<img src='cr2.jpg'> <audio autoplay><source src = 'Sorry Ya Bata I.mp3'></audio>"
            // document.getElementById("test").style.display = 'block';
            document.getElementById("test").classList.add("st");
        }
}
// bom1 .action,time مهم 
window.setTimeout(booo,5000);
function booo(){
    alert("boooooooo");
}
// bombine betweenthe loop and setTimeout:)
// window.setInterval(booo,2000)
// hosting 
console.log(tariq);

var tariq = 10; 
// let option 
// عاوز تحتفظ بقيمة المنغير نسنحدم let  , مش عاوز نستخدم var .

let fadya = 7;
for(let fadya = 7;fadya>0;fadya--){
    console.log(fadya);
}
console.log(fadya);

//const (constent) use to prevent the overwrite in the database
const PI = 3.14;


// Module use if the project big or work on by a group and if u work with some single page application
// in script tag  type = "module" 
// import it 
// paths issue solve by puting ur script on a server or use extion called live server


// arrow function use with react.js 

// let hi = function(){
//     console.log("hi");
// }

let hi = ()=>{
    console.log("hi");
}

hi();