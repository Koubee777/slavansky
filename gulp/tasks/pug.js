import pug from "gulp-pug";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import pugbem from "gulp-pugbem";
import htmlbeautify from 'gulp-html-beautify';
import mergeStream from 'merge-stream';

export const pugHTML = () => {

	return app.gulp.src(app.path.src.pug)
		.pipe(app.plugins.plumber(
				app.plugins.notify.onError({
					title: "PUG",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe(app.plugins.replace("@components", '../../blocks/components'))
		.pipe(app.plugins.replace("@sections", '../../blocks/sections'))
		.pipe(pug({
			// closeVoid: true,
			plugins: [pugbem]
		}))
		.pipe(app.plugins.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", ''))
		.pipe(htmlbeautify())
		// .pipe(
		// 	app.plugins.if(
		// 		app.isBuild,
		// 		webpHtmlNosvg()
		// 	)
		// )
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())


}


function replacePath() {
	return app.gulp.src("./src/pug/section/**/*.pug")
		.pipe(app.plugins.replace("@components", '../../../components'))
}
