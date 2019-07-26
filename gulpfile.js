var gulp = require('gulp'),
	browser = require('browser-sync').create();

function sync(done) {
	browser.init({
		server: {
			baseDir: "./dest/"
		},
		port: 3040
	});

	done();
}

function copy(done) {
	gulp.src('./node_modules/glyphicons-only-bootstrap/fonts/*.*')
		.pipe(gulp.dest('./dest/fonts/'));

	gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
			'./node_modules/glyphicons-only-bootstrap/css/bootstrap.min.css'])
		.pipe(gulp.dest('./dest/css/'));

	gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.js',
			'./node_modules/jquery/dist/jquery.js'])
		.pipe(gulp.dest('./dest/js/'));

	gulp.src('./src/img/*.*')
		.pipe(gulp.dest('./dest/img/'));

	done();
}

// function concats(done) {
// 	gulp.src(['./node_modules/jquery/dist/jquery.js',
// 			'./node_modules/bootstrap/dist/js/bootstrap.js'])
// 		.pipe(concat('plugin-bundle.js'))
// 		.pipe(gulp.dest('./dest/js/'));

// 	gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css', 
// 			'./node_modules/glyphicons-only-bootstrap/css/bootstrap.css'])
// 		.pipe(concat('plugin-bundle.css'))
// 		.pipe(gulp.dest('./dest/css/'));

// 	done();
// }

// function scss() {
// 	return gulp.src('./src/scss/*.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('./dest/css/'))
// 		.pipe(browser.stream());
// }

// function views() {
// 	return gulp.src('./src/views/*.pug')
// 		.pipe(pug({
// 			pretty: true
// 		}))
// 		.pipe(gulp.dest('./dest/'))
// 		.pipe(browser.stream());
// }

// function script() {
// 	return gulp.src('./src/js/*.js')
// 		.pipe(gulp.dest('./dest/js/'))
// 		.pipe(browser.stream());
// }

// function watch(){
// 	gulp.watch('./src/', gulp.series(scss, views, script));
// }

// var watch = gulp.parallel(sync, watch),
// 	build = gulp.series([concats, scss, views, script, watch]);

exports.copy = copy;
// exports.concats = concats;
// exports.sync = sync;
// exports.scss = scss;
// exports.views = views;
// exports.watch = watch;
// exports.default = build;