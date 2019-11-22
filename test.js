(function () {
	try {
		require('./index.js');
	} catch (ignore) {}
	function dummy() {
		console.log('this should not get called!');
		process.exit(1);
	}
	const ITER = 1000;
	for ( var i = 0, id = null; i < ITER; i++ ) {
		id = setInterval( dummy, 1000 );
		clearInterval( id );
	}

	if ( Object.keys(__SETINTERVAL_WATCHER__).length !== 0 ) {
		console.log("Failed to do normal registrations...");
		process.exit(1);
	}
}());
