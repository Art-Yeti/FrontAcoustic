module.exports = function () {
  const version = p.paths.lentaZIP.ZIPName + p.paths.lentaZIP.ZIPCount;

  p.gulp.task("autoreplace", function () {
    var content = p.gulp.src(p.paths.lentaZIP.content)
      .pipe(p.gp.replace("../", "/special/" + p.paths.lentaZIP.folderName + "/"))
      .pipe(p.gulp.dest(version + "/special/" + p.paths.lentaZIP.folderName));

    var html = p.gulp.src(p.paths.lentaZIP.html).pipe(p.gp.replace("../", "/special/" + p.paths.lentaZIP.folderName + "/")).pipe(p.gulp.dest(version + "/"));
    console.log(version)
    var all = p.merge(content, html);
    return all;
  });

  p.gulp.task("zip", function () {
    return p.gulp.src(version + "/**/*.*")
      .pipe(p.gp.zip('lenta_' + p.paths.lentaZIP.ZIPName + "_download_" + p.paths.lentaZIP.ZIPCount + ".zip"))
      .pipe(p.gulp.dest('./'))
  });

  p.gulp.task("lenta", p.gulp.series("autoreplace", "zip"));
};