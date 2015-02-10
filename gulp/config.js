var dest = './build',
  src = './src',
  mui = './node_modules/material-ui/src';

module.exports = {
  start_server: {
    file: dest + '/server.js'
  },
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      // baseDir: [dest, src]
      proxy: 'http://localhost:3000'
    },
    files: [
      dest + '/**'
    ]
  },
  app: {
    src: src + '/app/**/*.jsx',
    dest: dest + '/app'
  },
  server: {
    src: src + "/server.js",
    dest: dest
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**',
      mui + '/less/**'
    ],
    dest: dest + '/public/css'
  },
  views: {
    src: src + "/views/**",
    dest: dest + '/views'
  },
  fonts: {
    src: mui + '/less/material-design-fonticons/fonts/**',
    dest: dest + '/public/fonts/mdfonticon'
  },
  muiFonts: {
    src: mui + '/less/material-ui-icons/fonts/**',
    dest: dest + '/public/fonts'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest + '/public/js',
      outputName: 'app.js'
    }]
  }
};
