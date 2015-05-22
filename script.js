// create person


function Person(name, height, dialogue, colour){
  this.name = name || "Mystery Person";
  this.height = height || 150;
  this.dialogue = dialogue || "Greetings. I don't know you, but..." ;
  this.colour = colour;

  this.speech =  this.dialogue + ". My name is " + this.name + " and my favourite colour is " + this.colour;

  var imageBox = "<div class='person-box'><div class='person " + name + "' style='height: " + this.height + "'><h1>"+this.name+"</h1></div></div>";
  $('.people').append(imageBox);

  this.speak = function(){
    var domPerson = $('body').find('.person.' + this.name);
    domPerson.append('<span class="bubble">'+ this.speech +'</span>');
  }
}

Person.prototype.grow = function(){
  console.log("foo");
  var thisPerson = $('.person.'+this.name);
  thisPerson.slideToggle();
}

$(document).ready(function(){

  $('button').on("click", function(){
    var name = $('input[name="name"]').val();
    var height = $('input[name="height"]').val();
    var dialogue = $('input[name="dialogue"]').val();
    var colour = $('input[name="colour"]').val();

    new Person(name, height, dialogue, colour);
  });

})
