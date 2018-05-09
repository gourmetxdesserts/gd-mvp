module.exports = function (grunt) {
    "use strict",

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./public",
            src: ["**"],
            dest: "./bin/public"
          },
          {
            expand: true,
            cwd: "./views",
            src: ["**"],
            dest: "./bin/views"
          }
        ]
      }
    },
        ts: {
            options: {
                rootDir: "src"
            },
            dev: {
                src: ["**/*.ts", "!node_modules/**/*.ts", "!tests/**/*"],
                outDir: "bin",
                watch: "src",
                options: {
                    module: "commonjs",
                    target: "es2015"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-exec');

    var local = grunt.option("env") || "dev";
     grunt.registerTask("default", [
    "copy",
    "ts"
    ]);


};