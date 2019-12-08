/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/styles/*.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/js',
  },
  templates: {
    src: 'src/templates/pages/*.{html,pug}',
    watch: 'src/templates/**/*.{html,pug}',
    modules: 'src/modules/**/*.{html,pug}',
    dest: 'dist/'
  },
  images: {
    src: 'src/assets/img/**/*',
    dest: 'dist/assets/img'
  },
  copy: {
    src: 'src/robots.txt',
    dest: 'dist/'
  }
};
