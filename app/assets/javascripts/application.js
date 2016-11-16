// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var player1;
var player2;
var player3;
var player4;
var player5;
var player6;
var player7;
var player8;
var player9;

var onYouTubeIframeAPIReady = function() {
  player1 = new YT.Player('player1', {events: {'onReady': onPlayerReady}});
  player2 = new YT.Player('player2', {events: {'onReady': onPlayerReady}});
  player3 = new YT.Player('player3', {events: {'onReady': onPlayerReady}});
  player4 = new YT.Player('player4', {events: {'onReady': onPlayerReady}});
  player5 = new YT.Player('player5', {events: {'onReady': onPlayerReady}});
  player6 = new YT.Player('player6', {events: {'onReady': onPlayerReady}});
  player7 = new YT.Player('player7', {events: {'onReady': onPlayerReady}});
  player8 = new YT.Player('player8', {events: {'onReady': onPlayerReady}});
  player9 = new YT.Player('player9', {events: {'onReady': onPlayerReady}});
};

var onPlayerReady = function() {
  player1.mute();
  player2.mute();
  player3.mute();
  player4.mute();
  player5.mute();
  player6.mute();
  player7.mute();
  player8.mute();
  player9.mute();

  // player1.playVideo();
  // player2.playVideo();
  // player3.playVideo();
  // player4.playVideo();
  // player5.playVideo();
  // player6.playVideo();
  // player7.playVideo();
  // player8.playVideo();
  // player9.playVideo();
}