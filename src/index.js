'use strict';

console.log($);

var text_area = $('.message-field');
var output = $('.message-formatted'); 
    
function formated()
{
    var temp_str = text_area.val()
                        .trim()
                        .replace(/\s+/g," ")
                        .replace(/\n+/g," ")
                        .toLocaleLowerCase();
    output.text(temp_str);
}

text_area.on('input',formated);