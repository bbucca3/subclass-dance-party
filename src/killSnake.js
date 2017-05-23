var KillSnake = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="babydancer"> <img src="http://www.animatedimages.org/data/media/290/animated-snake-image-0008.gif" alt="Crying baby lost in the cave" height="100" width="100"> </span>');
  this.setPosition(top, left);

  this.$node.on('click', function(event) {
    //alert("clicked a baby");    
    $(this).fadeOut("fast");
  });
};

KillSnake.prototype = Object.create(Dancer.prototype);

KillSnake.prototype.constructor = KillSnake;

KillSnake.prototype.step = function() {
  this.oldStep();
  // this.$node.toggle(); 
};


