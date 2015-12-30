module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          require: 'babel-register'
        },
        src: ['unit/*.js']
      }
    }
  });

  grunt.registerTask('default', ['mochaTest']);
};
