module.exports = function() {
  p.gulp.task("public", function() {
    console.log("public!!!");
    return p.gulp
      .src(p.paths.src.public)
      .pipe(p.copy(p.paths.build.public)) // Просто копируем всю папку
      .pipe(p.gulp.dest(p.paths.build.public)) // в корень
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};
