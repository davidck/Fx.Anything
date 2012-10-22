Fx.Anything
===========

A simple yet powerful plug-in allowing animated transformations on anything while supporting all of MooTools Fx class default properties and events.

** Update 2012-Oct-22: New demo links below (css3, canvas, webgl) **

![Fx.Anything](http://github.com/davidck/Fx.Anything/raw/master/logo.png)

How to use
----------
### Demo Links
[CSS3 ex1](http://jsfiddle.net/davidck/ZrPGd/), [WebGL(Three.js) ex1](http://jsfiddle.net/davidck/jUSEU/), [Canvas(RaphaelJS) ex1](http://jsfiddle.net/davidck/FjwCT/), [Chaining ex1](http://jsfiddle.net/davidck/DhPnK/)

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

### WebGL (using Three.js) Transform	
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
	
### Canvas (using RaphaelJS) Transform	
Demo: [Canvas ex1](http://jsfiddle.net/davidck/FjwCT/)

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