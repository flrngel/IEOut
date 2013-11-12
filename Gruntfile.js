module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				seperator: ';'
			},
			dist: {
				src: ['src/header.js','src/util/*','src/define.js','src/detect.js','src/footer.js'],
				dest: 'build/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				mangle: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'build/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: 'src',
					out: 'build/<%= pkg.name %>.js',
					wrap: 'true',
					optimize: 'none',
					include: ['main']
				}
			},
			minify: {
				options: {
					baseUrl: 'src',
					out: 'build/<%= pkg.name %>.min.js',
					wrap: 'true',
					optimize: 'uglify2',
					include: ['main']
				}
			},
			soloplay: {
				options: {
					baseUrl: 'src',
					out: 'build/<%= pkg.name %>.soloplay.js',
					name: '../bower_components/almond/almond',
					optimize: 'none',
					include: ['main']
				}
			}
		},
		clean: ["build/*"]
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default',['clean','requirejs:compile','requirejs:minify']);
};
