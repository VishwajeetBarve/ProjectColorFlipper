const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNumber(){
  return Math.floor((Math.random()*hex.length));
}


$("#btn").click(function(){

let hexColor = "#";
for(var i = 0; i < 6; i++){
  hexColor +=  hex[randomNumber()];
}
  document.body.style.backgroundColor = hexColor;
  // $(document).css("backgroundColor" "hexColor");
  $(".color").text(hexColor);
});
