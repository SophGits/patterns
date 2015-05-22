// create person


function Person(name, height, dialogue, colour){
  this.name = name || "Mystery Person";
  this.height = height || 150;
  this.dialogue = dialogue || "Greetings. I don't know you, but..." ;
  this.colour = colour;

  this.speak = function(){
    return this.dialogue + ". My name is " + this.name + " and my favourite colour is " + this.colour;
  }

  var imageBox = "<div class='person-box'><div class='person' style='height: " + this.height + "'></div></div>";
  $('.people').append(imageBox);
}

var name = $('input[name="name"]').val();
var height = $('input[name="height"]').val();
var dialogue = $('input[name="dialogue"]').val();
var dialogue = $('input[name="dialogue"]').val();
var colour = $('input[name="colour"]').val();


var jenny = new Person("Jenny", 140, "Yo", "blue");

var blank = new Person();