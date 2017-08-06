var uglify = require('uglify-js');
var fs = require('fs');

function compressJS(){
    var result = uglify.minify([
        "public/app/js/app.js",
        "public/app/js/services/*",
        "public/app/js/controllers/*"//,
        // "public/app/js/directives/*"
    ], {
        outSourceMap: "app.min.js.map"
    });
    fs.writeFile('public/app/js/app.min.js', result.code.toString(), function(err){
        if(err){
            console.log('Error:', err);
        } else {
            console.log('Javascript Successfully Compressed!');
        }
    });
    fs.writeFile('public/app/js/app.min.js.map', result.map.toString().replace(/public/g,''), function(err){
        if(err){
            console.log('Error:', err);
        } else {
            console.log('Map Successfully Output!');
        }
    });
}

compressJS();