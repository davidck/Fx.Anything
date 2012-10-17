Fx.Anything
===========

A simple yet powerful plug-in allowing time based transformations on anything while supporting all of the MooTools Fx class default properties and events.

How to use
----------

### Sample Usage
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
