#!/usr/bin/env node

var sys = require('sys');
require('child_process')
.exec("gulp remove-proxy", function (error, stdout, stderr) {
	sys.puts(stdout)
});
