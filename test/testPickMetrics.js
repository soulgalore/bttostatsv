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
		'this.is.my.key.visualMetrics.FirstVisualChange.median=1000ms',
		'this.is.my.key.visualMetrics.FirstVisualChange.mdev=35ms',
		'this.is.my.key.visualMetrics.SpeedIndex.median=1117ms',
		'this.is.my.key.visualMetrics.SpeedIndex.mdev=32ms',
		'this.is.my.key.visualMetrics.VisualComplete85.median=1050ms',
		'this.is.my.key.visualMetrics.VisualComplete85.mdev=89ms',
		'this.is.my.key.visualMetrics.VisualComplete95.median=1216ms',
		'this.is.my.key.visualMetrics.VisualComplete95.mdev=86ms',
		'this.is.my.key.visualMetrics.VisualComplete99.median=2250ms',
		'this.is.my.key.visualMetrics.VisualComplete99.mdev=119ms',
		'this.is.my.key.visualMetrics.LastVisualChange.median=2250ms',
		'this.is.my.key.visualMetrics.LastVisualChange.mdev=119ms'
	];
	t.deepEqual( metrics, facit );
} );
