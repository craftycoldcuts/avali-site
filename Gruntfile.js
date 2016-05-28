module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/application.js',
        dest: 'js/application.min.js'
      }
    },
    uncss: {
      options: {
        timeout      : 5000,
        ignoreSheets : [/icomoon/, /embedcode/, /fonts.googleapis/],
        ignore       : ['#added_at_runtime', /beerModal+/, /navigation+/, /button-+/, /owl-+/, /modal+/, /fade+/, '.visible', '.first-nav', /second-nav+/, '.dark-nav', '.random1', '.random2', '.b-scroll', '.mobile-bg', '.fadeIn', '.lighten', '.in', '.modal-backdrop']
      },
      dist: {
        src: ['index_dev.html', 'join_dev.html', 'trade_dev.html'],
        dest: 'css/tidy.css'
      }
    },
    processhtml: {
      dist: {
        files: {
          'index.html': ['index_dev.html'] 
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // uncss
  grunt.loadNpmTasks('grunt-uncss');

  //process html
  grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'uncss', 'processhtml']);

};