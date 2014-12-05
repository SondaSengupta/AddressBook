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
    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        hostname: 'localhost',
      },
      livereload: {
        options: {
        open: true,
        base: ''
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        }, 
      files: ['*.html','main.css', 'js/*.js']
      },  
    }
  });
  grunt.task.run('notify_hooks');  
  grunt.registerTask('serve', ['connect:livereload','watch']); 
};

