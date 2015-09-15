'use strict';

var count = 0;

// target elements
var $likeForm = $('#like-form');
var $likeButton = $('#like-button');
var $resetButton = $('#reset-button');

// create functions
function onButtonSubmit(e) {
    e.preventDefault();
    count++;

    if(count === 1) {
        $likeButton.html('1 Like')
    }
    else $likeButton.html(count + ' Likes');
}

function onClearButton() {
    count = 0;
    $likeButton.html('0 Likes');
}

// add event listener
$likeForm.on('submit', onButtonSubmit);
$resetButton.on('click', onClearButton);




