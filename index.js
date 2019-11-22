(function ( g ) {

	var _setInterval = g.setInterval;
	var _clearInterval = g.clearInterval;
	var timers = g.__SETINTERVAL_WATCHER__ = {};

	g.setInterval = function ( f ) {
		var id = _setInterval.apply(g, arguments);
		var stack = (new Error().stack) || '';
		timers[ id ] = {
			name: f.name,
			stack: stack.split( /\n/m )
		};
		return id;
	};

	g.clearInterval = function ( id ) {
		delete timers[ id ];
		_clearInterval( id );
	};

} ( globalThis ) );
