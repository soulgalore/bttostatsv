const fs = require( 'fs' );
const test = require( 'ava' );
const path = require( 'path' );
const getMetrics = require( '../lib/pickMetrics' ).get;

const browsertimeJSON = JSON.parse(
	fs.readFileSync( path.join( __dirname, 'browsertimeObama.json' ), 'utf8' )
);

const keyStart = 'this.is.my.key';
test( 'Pick right metrics from Browsertime JSON', t => {
	const metrics = getMetrics( browsertimeJSON, keyStart );
	const facit = [
		'this.is.my.key.visualMetrics.FirstVisualChange=1000ms',
		'this.is.my.key.visualMetrics.SpeedIndex=1117ms',
		'this.is.my.key.visualMetrics.VisualComplete85=1050ms',
		'this.is.my.key.visualMetrics.VisualComplete95=1216ms',
		'this.is.my.key.visualMetrics.VisualComplete99=2250ms',
		'this.is.my.key.visualMetrics.LastVisualChange=2250ms'
	];
	t.deepEqual( metrics, facit );
} );
