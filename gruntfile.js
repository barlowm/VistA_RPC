/* global module, require */
var mode = "Dev";
// mode = "Prod";

module.exports = function exports(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

'ftp-deploy': {
  build: {
    auth: {
      host: '173.201.141.128',
      port: 21,
      authKey: 'key2'
    },
    src: './_site',
    dest: '/VistA_RPC'
  }
}

  });

  grunt.loadNpmTasks('grunt-ftp-deploy');

};