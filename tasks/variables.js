module.exports = function(grunt) {



  grunt.registerMultiTask('variables', 'Pass variables to the less parser before compiling.', function() {
    var name; 
    var task  = this;
    var output = '// Source generated by grunt-less-config\n';

    var _ref = this.options();
    for (name in _ref) {
      var value = _ref[name];
      output += "@" + name + ": " + value + ";\n";
    }
    output += '\n';
    (function(output) {
      var i, _j, len, len1;
      var _ref1 = task.files;
      var destFiles = [];

      for (i = 0, len = _ref1.length; i < len; i++) {
        var file = _ref1[i];
        var basePath = '';
        var dirs = file.dest.split('/');
        dirs.splice(0, dirs.length - 1).forEach(function(dir) {
          basePath += '../';
        });
        var _ref2 = file.src;
        for (_j = 0, len1 = _ref2.length; _j < len1; _j++) {
          var path = _ref2[_j];
          output += "@import \"" + basePath + path + "\";\n";
        }
        grunt.file.write(file.dest, output);
        destFiles.push(grunt.log.writeln("File \"" + file.dest + "\" created."));
      }
      destFiles;
    })(output);
  });

};