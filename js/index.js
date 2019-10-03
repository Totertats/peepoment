$(document).ready(function functionName() {
  var text = ["awesome", "beautiful", "amazing",
              "stunning", "breathtaking", "elegant", "bold",
              "angelic", "sensuous", "unique", "charming",
              "wondrous", "majestic", "lovely", "fresh",
              "creative", "flamboyant", "ravishing"];
  var x = Math.floor((Math.random()*18));
  $(".compliment-word").html(text[x]);
})
