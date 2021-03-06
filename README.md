Fx.Anything
===========

An easy to use and flexible animation plug-in which taps into the power of MooTools FX.

![Fx.Anything](http://github.com/davidck/Fx.Anything/raw/master/logo.png)

How to use
----------
### Demo Links
[CSS3 ex1](http://jsfiddle.net/davidck/ZrPGd/), [Three.js ex1](http://jsfiddle.net/davidck/jUSEU/), [RaphaelJS ex1](http://jsfiddle.net/davidck/sRGZK/), [Chaining ex1](http://jsfiddle.net/davidck/DhPnK/)

### Basic Usage
	var fx = new Fx.Anything({
		onReport: function(progress, mixedVar) {
			// use progress as your variable to control your effect.
			// optionally pass in mixedVar 
		}
	});
	fx.start();
	fx.start('my string'); // mixedVar will contain your string.
	fx.start([1, 2]); // mixedVar will contain your array.

Samples
-------

### CSS3 Transform
Demo: [CSS3 ex1](http://jsfiddle.net/davidck/ZrPGd/)

	var _propeller = document.body.getElement('.propeller');
	
	var rotation = 0;
	var fx = new Fx.Anything({
		duration: 20000,
		transitions: Fx.Transitions.Quad.easeInOut,
		onReport: function(progress) {
			rotation = progress*(360*12);
        
			var str_rotation = 'rotate('+rotation+'deg)';
			_propeller.setStyles({
				'transform': str_rotation,
				'-ms-transform': str_rotation,
				'-webkit-transform': str_rotation,
				'-o-transform': str_rotation,
				'-moz-transform': str_rotation
			});
		}        
	});
	
	fx.start();

### Three.js	
Demo: [WebGL ex1](http://jsfiddle.net/davidck/jUSEU/)

	var fx = new Fx.Anything({
		duration: 1600,
		transition: Fx.Transitions.Bounce.easeOut,
		onReport: function(progress) {
			pointLight.position.x = progress*220-100;
			pointLight.position.y = progress*60-30;
			renderer.render(scene, camera);
		}        
	});
	fx.start();
	
### RaphaelJS	
Demo: [Canvas ex1](http://jsfiddle.net/davidck/sRGZK/)

	var scaleTo = 0.5;
	var fx = new Fx.Anything({
		duration: 2000,
		link: 'cancel',
		transition: Fx.Transitions.Elastic.easeOut,
		onReport: function(progress, state) {
			var newScale = (state == 'on') ? progress * scaleTo + 1 : (1+scaleTo) - (progress * scaleTo);
			mainImage.transform('s'+newScale);
			mainImage.attr({
				opacity: newScale-0.5
			});
		}   
	});
	document.id('holder').addEvents({
		mouseenter: fx.start.bind(fx, 'on'),
		mouseleave: fx.start.bind(fx, 'off')
	});
	
### Chaining Example
Demo: [Chaining ex1](http://jsfiddle.net/davidck/DhPnK/)

	fx.start().chain(function() {
		fxCracking.start({
			collection: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'],
			codeLength: 6,
			fontSize: 12,
			cracked: []
		}).chain(function() {
			_door.setStyle('background-color', 'green');
			document.body.getElements('strong, em').setStyle('color', 'green');
			fx.start(true);
		});
	});

Release Notes
-------------
More coming soon.