// ==UserScript==
// @name            Twitter Show Sensitive Content
// @version         1.0
// @description    	Remove Sensitive Content warning on Twitter
// @author         	Near
// @include     	https://twitter.com/*
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvElEQVRIx+XVQYiPQRzG8c+++2+LUmtEXJSTyoVWKkmEapfL1rx7IeXGTUpFXDgSJ6IoSqnm1UZykawtVspx10lR7eb0xkrC7n9dXmX17nrb3Ys8NU0183u+89TM/PjX1QF5UXamGKabFuVFuQKncBDr8REPcTbF8K7aswvjvwBXcS/F8KSBecAwNtUsf8Qt7ANszgD9eJAX5d4GAa7MYQ7dOI6VOI3DvxLMAKaq6JdSDO2a06/FBDpgHrXxDXsywASghQsYyYtyZ03hlgbmMIm+FMNIC3AfxwCwDc/yonyNu3iM0YbmcDvFMAQtwHkMYBUAoKca8B2fGgJmALK8KJdhEMOYT11Y3RAwDpClGL5Whf1L+L7GADLA9SU0b+Pln4DLeLpEgKEUQzkLkGL4gT5cxCQWoxsAkAFgA/ajjYXqLVItIMXwBmPoXgTgZIphaq4EcASPFmh+J8UwCAAwC5Bi+IwD6MVNNP3CX+Fo3UI2R0EndlTz3/QCvSmGL7UNJy/K7ViONdiKPmxsePJrOFE91lq18B7ncAhdaHTXcSbF8LxRy/ytUw1gN3qwrko2jQ8YwzAGUwyj/hv9BJmOefNXwjeWAAAAAElFTkSuQmCC
// @license         MIT
// ==/UserScript==

function hidden (div) {
  div.style.display = 'none'
}

function removeClass (div, className) {
  div.classList.remove(className)
}

function has (string, search){
  return string.includes(search)
}

function removeSensitiveContentWarning () {
	const buttons = document.querySelectorAll('.r-drfeu3')
	const blur = document.querySelectorAll('.r-yfv4eo.r-16y2uox')

	buttons.forEach(hidden)
	buttons.forEach(function (div) { removeClass(div, '.r-drfeu3') })
	blur.forEach(function (div) { removeClass(div, 'r-yfv4eo') })
}

(function () {
  'use strict';
  removeSensitiveContentWarning()

  setInterval(function () {
    const url = window.location.href
    if (has(url, 'twitter.com')) {
		removeSensitiveContentWarning()
    }
  }, 2000)
})()
