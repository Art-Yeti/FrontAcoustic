module.exports = function () {
    p.gulp.task("add-component", function (callback) {

        if (p.gp.util.env.name) {
            result = p.gulp.src(p.paths.addComponent.template)
                .pipe(p.gp.replace("_reactTemplate", p.gp.util.env.name))
                .pipe(p.gp.rename(function (path) {
                    path.basename = p.gp.util.env.name;
                }))
                .pipe(p.gulp.dest(p.paths.addComponent.result + p.gp.util.env.name));
        }
        callback()

    });
};