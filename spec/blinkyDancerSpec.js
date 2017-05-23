describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('myDancer', function() {

  var myDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    myDancer = new BabyDancer(800, 180, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(myDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(myDancer.$node, 'toggle');
    myDancer.step();
    expect(myDancer.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(myDancer, 'step');
      expect(myDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(myDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);

      expect(myDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('snakeDancer', function() {

  var myDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    myDancer = new KillSnake(800, 180, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(myDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not have a step function that makes its node blink', function() {
    sinon.spy(myDancer.$node, 'toggle');
    myDancer.step();
    expect(myDancer.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(myDancer, 'step');
      expect(myDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(myDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);

      expect(myDancer.step.callCount).to.be.equal(2);
    });
  });
});

