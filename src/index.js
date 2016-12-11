'use strict';

console.log($);

function format_massage()
{
    var text_area = $('.message-field');
    var output = $('.message-formatted');
    var temp_str;
    
    function formated()
    {
        temp_str = text_area.val()
                            .trim()
                            .replace(/\s+/g," ")
                            .replace(/\n+/g," ")
                            .toLocaleLowerCase();
        output.text(temp_str);
    }
    
    text_area.keyup(formated);
    
}

$(document).ready(format_massage);