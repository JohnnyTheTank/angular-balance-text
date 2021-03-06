module.exports = function(grunt) {

    var banner = '/**\n    @name: <%= pkg.name %> \n    @version: <%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) \n    @author: <%= pkg.author %> \n    @url: <%= pkg.homepage %> \n    @license: <%= pkg.license %>\n*/\n';

    var sources = [
                        'src/angular-balance-text.js'
                    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/angular-balance-text.min.js' : sources
                }
            },
            options: {
                banner: banner
            }
        },
        concat: {
            options: {
                separator: ';',
                banner: banner
            },
            dist: {
                src: sources,
                dest: 'dist/angular-balance-text.js'
            }
        },
        watch: {
            minifiyJs: {
                files: sources,
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};

