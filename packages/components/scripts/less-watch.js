const chokidar = require('chokidar');

// One-liner for current directory
chokidar.watch('src/**/*.less').on('all', (event, path) => {
  console.log(event, path);
});
