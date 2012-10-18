Fx.Anything
===========

A simple yet powerful plug-in allowing time based transformations on anything while supporting all of MooTools Fx class default properties and events.

How to use
----------

### Usage
	var fx = new Fx.Anything({
		duration: 1200,
		transitions: Fx.Transitions.Bounce.easeOut,
		onReport: function(progress, mixedVar) {
			// use progress as your variable to control your effect.
			// optionally pass in mixedVar 
		}
	});
	fx.start();
	fx.start('my string'); // mixedVar will contain your string.
	fx.start([1, 2]); // mixedVar will contain your array.
	
### See demo for a more advanced usage.

Samples
-------

### CSS3 Transform
Demo: [CSS3 example 1](http://jsfiddle.net/davidck/ZrPGd/)

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
	
### More changes coming soon.