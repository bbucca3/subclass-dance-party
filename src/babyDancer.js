var BabyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="babydancer"> <img src="http://www.netanimations.net/animated-crying-screaming-baby.gif" alt="Crying baby lost in the cave" height="150" width="150"> </span>');
  this.setPosition(top, left);
};

BabyDancer.prototype = Object.create(Dancer.prototype);

BabyDancer.prototype.constructor = BabyDancer;

BabyDancer.prototype.step = function() {
  this.oldStep();
  
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // this.$node.css({
  //   left: Math.floor( Math.random() * 1000 ),
  //   top: Math.floor( Math.random() * 1000 )
  // });
  this.$node.on('click', function(event) {
    //alert("clicked a baby");    
    $(this).fadeOut("fast");
  });
};


