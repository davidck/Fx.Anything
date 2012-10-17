/*
---
description: A simple yet powerful Mootools FX plug-in allowing time based transformations on anything while supporting all of the MooTools Fx class default properties and events.

license: MIT-style

authors:
- David CK Chan

requires:
- core/1.4.5

provides: [Fx.Anything]

...
*/

Fx.Anything = new Class({
    Extends: Fx,
    start: function(obj){
        this.obj = obj || null;
        return this.parent(null, null);
    },
    compute: function(from, to, delta){
        this.fireEvent('report', [delta, this.obj]);
        return Fx.compute(from, to, delta);
    }
});
