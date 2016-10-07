"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var minify = require("gulp");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");


gulp.task("style", function() {
	gulp.src("sass/style.scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(postcss([
		autoprefixer({browsers: [
			"last 1 version",
			"last 2 Chrome versions",
			"last 2 Firefox versions",
			"last 2 Opera versions",
			"last 2 Edge versions"
			]}),
		mqpacker({
			sort: true
		})
	]))
	.pipe(gulp.dest("css"))
	.pipe(minify())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("css"))
	.pipe(server.stream());
});

gulp.task("images", function() {
	return gulp.src("*img/**/*.{png,jpg.gif}")
	.pipe(imagemin([
		imagemin.optipng({optimizationlevel: 3}),
		imagemin.jpegtran({progressive: true})
	]))
	.pipe(gulp.dest("img"));
})

gulp.task("symbols", function() {
	return gulp.src("*img/svgsprite/*.svg")
	.pipe(svgmin())
	.pipe(svgstore({
		inlinesvg: true
	}))
	.pipe(rename("symbols.svg"))
	.pipe(gulp.dest("img"));
})

gulp.task("serve", ["style"], function() {
	server.init({
		server: ".",
		notify: false,
		open: true,
		ui: false
	});

	gulp.watch("sass/**/*.{scss,sass}", ["style"]);
	gulp.watch("*.html").on("change", server.reload);
});
