/*
 * From grunt-contrib-concat
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Return the given source code with any leading banner comment stripped.
module.exports = function(src, options) {
  options = options || {};
  var m = [];
  if (options.line) {
    // Strip // ... leading banners.
    m.push('(?:.*\\/\\/.*\\r?\\n?)*\\s*');
  }
  if (options.block) {
    // Strips all /* ... */ block comment banners.
    m.push('\\/\\*[\\s\\S]*?\\*\\/');
  } else {
    // Strips only /* ... */ block comment banners, excluding /*! ... */.
    m.push('\\/\\*[^!][\\s\\S]*?\\*\\/');
  }
  var re = new RegExp('^\\s*(?:' + m.join('|') + ')\\s*', '');
  return src.replace(re, '');
};
