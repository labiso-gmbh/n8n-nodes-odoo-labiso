const { src, dest } = require('gulp');

function copyFiles() {
	return src('nodes/**/*.{png,svg,json}')
		.pipe(dest('dist/nodes'));
}

exports.default = copyFiles;
