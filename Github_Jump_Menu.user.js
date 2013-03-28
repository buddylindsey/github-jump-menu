// ==UserScript==
// @name        Github Jump Menu
// @namespace   githubjumpmenu
// @description More easily jump to your favorite, of the day, repositories on github.
// @icon        https://github.com/favicon.ico
// @include     http*://github.com/*
// @require     http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.0.0
// @grant       GM_log
// ==/UserScript==

function addCss(cssString) { 
  var head = document.getElementsByTagName('head')[0]; 

  var newCss = document.createElement('style'); 
  newCss.type = "text/css"; 
  newCss.innerHTML = cssString; 
  head.appendChild(newCss); 
}

function addMenu(locationName) {
  var container = document.createElement("div");
  container.setAttribute("id", "github-jump-menu");
  var location = document.getElementById(locationName);
  document.body.insertBefore(container, location);

  var items = [];
  items.push("<li class='ghjm-header'>Work</li>");
  items.push("<li><a href='/tulsawebdevs'>tulsawebdevs</a></li>");

  var menu = $("#github-jump-menu").empty();
  menu.html("<div class='ghjm-container'></div>");
  $(".ghjm-container").html("<ul class='jump-list'></ul>");
  for(var i = 0; i < items.length; i++){
    $(".jump-list").append(items[i]);
  }
  $(".ghjm-container").append("<div class='ghjm-add'>add page</div>");
  menu.append("<div class='ghjm-collapse'><</div>");

  // This binds various commands to our menu for later use
  addCommands();
}

// Add the menu to the page. 
// Pass it id of div you want to put it before.
function addCommands() {
  // Adds all commands that menu will use
  $(".ghjm-collapse").click(function(){
    $(".ghjm-container").toggle(325);
  });

  $(".ghjm-add").click(function(){
    var url = document.location.pathname;
    $(".jump-list").append("<li><a href='"+url+"'>"+url.substr(1)+"</a></li>");
  });
}

// Add menu to page
addMenu("wrapper");

// Adds the css to the menu
var githubcss = "" +
"#github-jump-menu {z-index: 9999; padding: 10px; background-color: #F3F3F3;top: 40px; position: absolute; margin: 0px 0px 0px 0px; border-right: 1px solid #E5E5E5; border-bottom: 1px solid #E5E5E5;}" +
"#github-jump-menu .ghjm-container ul{ list-style-type: none; }" +
"#github-jump-menu .ghjm-container ul li{ margin: 0px; padding: 0px;}" +
".ghjm-header{ font-weight: bold; }";
addCss(githubcss);

