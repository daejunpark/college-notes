'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect')

function applyTemplate(templateFile) {
    const fs = require('fs')
    const tap = require('gulp-tap')

    return tap(function(vinyl) {
        if (!vinyl.contents) return     // Ignore directories
        const template = fs.readFileSync(templateFile)
                           .toString().split('@@CONTENT@@')
        const begin = template[0], end = template[1]
        vinyl.contents = Buffer.concat([
            new Buffer(begin), vinyl.contents, new Buffer(end)])
    })
}

gulp.task('render-markdown', function() {
    const mdAdapter = require('gulp-markdown-it-adapter'),
          markdownIt = require('markdown-it')
    const md = new markdownIt('commonmark')
    md.use(require('markdown-it-katex'))
    md.use(require('markdown-it-deflist'))

    return gulp
        .src('src/**/*')
        .pipe(mdAdapter(md))
        .pipe(connect.reload())
        .pipe(applyTemplate('template.html'))
        .pipe(gulp.dest('.build/www/'))
})

gulp.task('copy-katex-dist', function() {
    return gulp
        .src('node_modules/katex/dist/katex.min.css')
        .pipe(gulp.dest('.build/www/katex/'))
})

gulp.task('build', ['copy-katex-dist', 'render-markdown'])

gulp.task('serve', ['build'], function() {
    const watch = require('gulp-watch')

    connect.server({
        root: '.build/www',
        livereload: true
        })
    watch(['./template.html*', 'src/**/*'], function() { gulp.start('build') } )
})
