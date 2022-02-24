// .pipe(p.del.sync(p.paths.build.js+['/main.min.js']));
module.exports = function() {
    p.gulp.task("del-old-chunk", async function() {
        return p.del.sync(p.paths.build.js+['/main.min.js']),
        p.browserSync.reload({
            stream: true,
        });
    });
};