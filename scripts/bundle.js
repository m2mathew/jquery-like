(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    if (count === 1) {
        $likeButton.html('1 Like');
    } else $likeButton.html(count + ' Likes');
}

function onClearButton() {
    count = 0;
    $likeButton.html('0 Likes');
}

// add event listener
$likeForm.on('submit', onButtonSubmit);
$resetButton.on('click', onClearButton);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map