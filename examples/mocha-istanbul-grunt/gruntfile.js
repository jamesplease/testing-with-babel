var isparta = require('isparta');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-env');

  grunt.initConfig({
    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: './coverage'
      }
    },
    mochaTest: {
      test: {
        options: {
          require: 'babel-register'
        },
        src: ['unit/*.js']
      }
    },
    instrument: {
      files: 'src/*.js',
      options: {
        basePath: 'coverage/instrument',
        babel: {ignore: false},
        instrumenter: isparta.Instrumenter
      }
    },
    storeCoverage: {
      options: {
        dir: 'coverage/reports'
      }
    },
    makeReport: {
      src: 'coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'coverage/reports',
        print: 'detail'
      }
    }
  });

  grunt.registerTask('default', ['mochaTest']);
  grunt.registerTask('coverage', [
    'env',
    'instrument',
    'mochaTest',
    'storeCoverage',
    'makeReport'
  ]);
};
