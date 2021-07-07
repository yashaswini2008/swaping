var a= prompt("Enter 1st number : ")
var b = prompt("Enter 2nd number")


function setup() {
  createCanvas(800, 800);
 
  var b1 = createButton("click here to swap");
  b1.mousePressed(swap);
  b1.position(300,100)
}

function swap(){

[a,b] = [b,a];

console.log("The new value of a after swapping",+a);
console.log("The new value of b after swapping",+b);

}



function draw() {

  background("blue");
  
}
