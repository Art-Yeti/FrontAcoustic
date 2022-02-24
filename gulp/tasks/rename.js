module.exports = function() {
    p.gulp.task("rename-build-chunk", function() {
        return p.gulp
            .src(p.paths.build.js + "/main.min.js")
            .pipe(p.rename('app.min.js')
            )
            .pipe(p.gulp.dest(p.paths.build.js))
            .pipe(
                p.browserSync.reload({
                    stream: true,
                })
            );
    });
};