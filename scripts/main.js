'use strict';

var count = 0;

// target elements
var $startButton = $('.start-button'); // class
var $likeForm = $('form');  // tag
var $likeButton = $('.like-button');  // class
var $resetButton = $('#reset-button');  // id

$likeForm.hide();
$resetButton.hide();

/*
*   create functions
*
*/

// hide start button and show input buttons
function onShowButtons() {
  $startButton.hide();
  $likeForm.show();
  $resetButton.show();
}

function onButtonSubmit(e) {
    // prevents automatic refresh on submit
    e.preventDefault();
    count++;

    if(count === 1) {
        $likeButton.html('1 Like')
    }
    else {
      $likeButton.html(count + ' Likes');
    }
}

function onClearButton() {
    count = 0;
    $likeButton.html('0 Likes');
}

// add event listener
$startButton.on('click', onShowButtons);
$likeForm.on('submit', onButtonSubmit);
$resetButton.on('click', onClearButton);
