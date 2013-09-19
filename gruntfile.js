module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      banner: "//  <%= pkg.title %>.js <%= pkg.version %>\n" +
              "//  <%= pkg.homepage %>\n" + 
              "//  (c) 2013 <%= pkg.author.name %>\n" + 
              "//  <%= pkg.title %> may be freely distributed under the MIT license.\n\n"
    },
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: "<%= meta.banner %>" + ";(function() {\n\n\t",
        footer: "\n}).call(window);",
        stripBanners: true,
        process: true,
        separator: "\n\t"
      },
      dist: {
        src: [
          'src/main.js', 
          'src/core/init.js', 'src/core/events.js', 
          'src/helpers/*.js', 'src/modules/*.js',
          'src/core/register.js'
        ],
        dest: 'dist/<%= pkg.name %>.js',
      }
    },
    uglify: {
      options: {
        mangle: false,
        banner: "<%= meta.banner %>"
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['src/**/*.js'],
      tasks: ['default']
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};