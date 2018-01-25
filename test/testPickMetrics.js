const fs = require( 'fs' );
const test = require( 'ava' );
const path = require( 'path' );
const getMetrics = require( '../lib/pickMetrics' ).get;

const browsertimeJSON = JSON.parse(
	fs.readFileSync( path.join( __dirname, 'browsertimeObamaTimeline.json' ), 'utf8' )
);

const keyStart = 'this.is.my.key';
test( 'Pick right metrics from Browsertime JSON', t => {
	const metrics = getMetrics( browsertimeJSON, keyStart );
	const facit = [
		'this.is.my.key.visualMetrics.FirstVisualChange.min=767ms',
		'this.is.my.key.visualMetrics.FirstVisualChange.median=800ms',
		'this.is.my.key.visualMetrics.FirstVisualChange.mdev=28ms',
		'this.is.my.key.visualMetrics.SpeedIndex.min=827ms',
		'this.is.my.key.visualMetrics.SpeedIndex.median=867ms',
		'this.is.my.key.visualMetrics.SpeedIndex.mdev=27ms',
		'this.is.my.key.visualMetrics.VisualComplete85.min=767ms',
		'this.is.my.key.visualMetrics.VisualComplete85.median=933ms',
		'this.is.my.key.visualMetrics.VisualComplete85.mdev=49ms',
		'this.is.my.key.visualMetrics.VisualComplete95.min=867ms',
		'this.is.my.key.visualMetrics.VisualComplete95.median=933ms',
		'this.is.my.key.visualMetrics.VisualComplete95.mdev=27ms',
		'this.is.my.key.visualMetrics.VisualComplete99.min=1767ms',
		'this.is.my.key.visualMetrics.VisualComplete99.median=1767ms',
		'this.is.my.key.visualMetrics.VisualComplete99.mdev=24ms',
		'this.is.my.key.visualMetrics.LastVisualChange.min=1767ms',
		'this.is.my.key.visualMetrics.LastVisualChange.median=1767ms',
		'this.is.my.key.visualMetrics.LastVisualChange.mdev=24ms',
		'this.is.my.key.visualMetrics.PerceptualSpeedIndex.min=862ms',
		'this.is.my.key.visualMetrics.PerceptualSpeedIndex.median=902ms',
		'this.is.my.key.visualMetrics.PerceptualSpeedIndex.mdev=25ms',
		'this.is.my.key.cpu.category.rendering.min=1222ms',
		'this.is.my.key.cpu.category.rendering.median=1324ms',
		'this.is.my.key.cpu.category.rendering.mdev=26ms',
		'this.is.my.key.cpu.category.scripting.min=330ms',
		'this.is.my.key.cpu.category.scripting.median=353ms',
		'this.is.my.key.cpu.category.scripting.mdev=21ms',
		'this.is.my.key.cpu.category.loading.min=78ms',
		'this.is.my.key.cpu.category.loading.median=91ms',
		'this.is.my.key.cpu.category.loading.mdev=9ms',
		'this.is.my.key.cpu.category.painting.min=31ms',
		'this.is.my.key.cpu.category.painting.median=37ms',
		'this.is.my.key.cpu.category.painting.mdev=2ms'
	];
	t.deepEqual( metrics, facit );
} );
