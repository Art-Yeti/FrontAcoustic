const source = "src"; // Название папки с исходными файлами
const build = "build"; // Название папки с готовыми файлами

// Экспортируем пути для gulpfile.js
module.exports = {
  project: build,
  lentaZIP: {
    folderName: "32432", // 21082108__raif
    ZIPName: "name", // raiffeisen
    ZIPCount: "count",
    content: ["build/**/*.*", "!build/tpl/**/*.html"],
    html: ["build/tpl/**/*.*", "!build/tpl/_template.html"]
  },
  src: {
    scss: [
      source + "/static/sass/style.scss",
      source + "/components/**/*.scss"
    ],
    pug: source + "/pages/*.pug",
    js: [source + "/static/js/index.js"],
    fonts: source + "/static/fonts/*.{woff,woff2,eot,ttf}",
    img: [
      source + "/static/img/**/*.{png,jpg,jpeg,gif,webp,svg,ico,webmanifest}",
      source + "/components/**/assets/*.*",
      "!src/static/img/png-sprite/*.*",
      "!src/static/img/svg-sprite/*.*"
    ],
    svg: [
      source + "/components/assets/**/*.svg",
      source + "/static/img/svg/**/*.svg"
    ],
    spritePNG: source + "/static/img/png-sprite/*.png",
    spriteSVG: source + "/static/img/svg-sprite/*.svg",
    public: source + "/public/**/*"
  },
  build: {
    styles: build,
    html: build + "/tpl",
    js: build + "/js",
    fonts: build + "/fonts",
    img: build + "/img",
    svg: build + "/img/svg",
    spritePNG: build + "/img/sprite",
    spriteSVG: build + "/img",
    spriteCSS: source + "/static/sass/sprite", // Генерируемый файл с данными для PNG-спрайта
    public: build
  },
  watch: {
    sass: [
      source + "/static/sass/**/*.*",
      source + "/static/sass/basic/*.*",
      source + "/components/**/*.scss"
    ],
    pug: [source + "/components/**/*.pug", source + "/pages/**/*.pug"],
    js: [source + "/static/js/*.js", source + "/components/**/*.js"],
    fonts: source + "/static/fonts/**/*.*",
    img: [source + "/components/**/assets/*.*", source + "/static/img/**/*.*"],
    svg: [
      source + "/components/assets/**/*.svg",
      source + "static/img/svg/**/*.svg"
    ],
    spritePNG: source + "/static/img/png-sprite/*.*",
    spriteSVG: source + "/static/img/svg-sprite/*.*",
    public: source + "/public"
  },
  addModule: {
    template: source + "/components/Templates/_template/*.*",
    result: source + "/components/"
  },
  addComponent: {
    template: source + "/components/Templates/_reactTemplate/*.*",
    result: source + "/components/ReactComponents/"
  },
  addSection: {
    template: source + "/components/Templates/_sectionTemplate/*.*",
    result: source + "/components/Sections/"
  },
  browserSync: {
    server: {
      baseDir: "./" + build,
      directory: true
    },
    tunnel: false,
    // host: "localhost",
    // port: 9000,
    host: "192.168.31.102",
    port: 8080,
    logPrefix: "Local server"
  },
  public: source + "/public/*.*"

};
