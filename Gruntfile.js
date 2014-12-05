module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
  jshint: {
    options: {
      jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
      files: ['Gruntfile.js', 'js/**/*.js']
  },

  connect: {
    options: {
      port: 8000,
      livereload: 35729,
      hostname: 'localhost'
    },
    livereload: {
        options: {
        open: true,
        base: '/'
      }
    }
    }
  });
  grunt.task.run('notify_hooks');  
  grunt.registerTask('serve', ['connect:livereload','jshint','watch',]); 
};

