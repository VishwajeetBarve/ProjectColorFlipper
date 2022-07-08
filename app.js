const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function randomNumber(){
  return  Math.floor((Math.random()*4));
}


$("#btn").click(function() {
  var random = randomNumber();
  document.body.style.backgroundColor = colors[random];
  $(".color").text(colors[random]);
});
