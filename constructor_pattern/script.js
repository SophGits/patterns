// create person


function Person(name, height, dialogue, colour){
  this.name = name || "MysteryPerson";
  this.height = height || 150;
  this.dialogue = dialogue || "Greetings. I don't know you, but..." ;
  this.colour = colour || "None of your business";

  var imageBox = "<div class='person-box'><div class='person " + name + "' style='height: " + this.height + "'><h1>"+this.name+"</h1></div></div>";
  $('.people').append(imageBox);

   //can I put a fn in here?
   this.bar = function(){
    console.log(this.colour);
   }
}

Person.prototype.speak = function(domPerson){
  this.speech =  this.dialogue + ". My name is " + this.name + " and my favourite colour is " + this.colour;
  domPerson.append('<span class="bubble">'+ this.speech +'</span>');
}

Person.prototype.listen = function(){
  var that = this;
  var domPerson = $('.person.' + this.name);
  domPerson.mouseover(function(){
    that.speak(domPerson);
  });
}

Person.prototype.grow = function(time){
  var thisPerson = $('.person.'+this.name);
  thisPerson.slideToggle(time);
}

$(document).ready(function(){

  $('button').on("click", function(){
    var name = $('input[name="name"]').val();
    var height = $('input[name="height"]').val();
    var dialogue = $('input[name="dialogue"]').val();
    var colour = $('input[name="colour"]').val();

    var newbie = new Person(name, height, dialogue, colour);
    newbie.listen();
    newbie.grow(0);
    newbie.grow(400);

  });


})
