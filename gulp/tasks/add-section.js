module.exports = function () {
    p.gulp.task("add-section", function (callback) {

        if (p.gp.util.env.name) {
            result = p.gulp.src(p.paths.addSection.template)
                .pipe(p.gp.replace("_sectionTemplate", p.gp.util.env.name))
                .pipe(p.gp.rename(function (path) {
                    path.basename = p.gp.util.env.name;
                }))
                .pipe(p.gulp.dest(p.paths.addSection.result + p.gp.util.env.name));
        }
        callback()

    });
};