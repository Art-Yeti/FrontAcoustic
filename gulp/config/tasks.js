module.exports = [
  // Список наших тасков
  "./gulp/tasks/pug", // Конвертируем PUG
  "./gulp/tasks/sass", // Конвертируем SCSS to CSS + минификация
  "./gulp/tasks/js", // Минификация JS
  "./gulp/tasks/img", // Минификация картинок
  "./gulp/tasks/svg", // Минификация SVG
  "./gulp/tasks/fonts", // Копируем шрифты
  "./gulp/tasks/png-sprite", // Спрайты из PNG
  "./gulp/tasks/svg-sprite", // Спрайты из SVG
  "./gulp/tasks/delete", // Удаляем build
  "./gulp/tasks/watch", // Наблюдение за файлами
  "./gulp/tasks/reload", // Перезагрузка browserSync
  "./gulp/tasks/public", // Копируем фавиконки и прочее добро в build
  "./gulp/tasks/rename", // переименовываем файл бандла в app.js
  "./gulp/tasks/del-old-chunk", //
  "./gulp/tasks/build", // Удаляем билд и собираем все таски
  "./gulp/tasks/server", // Таски watch + reload

  "./gulp/tasks/add-component", // Добавить React компонент
  "./gulp/tasks/add-section", // Добавить Section
  "./gulp/tasks/add-module", // Добавить компонент
  "./gulp/tasks/lenta", // Lenta ZIP
];
