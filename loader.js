function meowLoaderCSS() {
	"use strict";
	var xx = window.document.createElement("link");
	var ref = before || window.document.getElementsByTagName("script")[0];
	var meowStyleSheets = window.document.styleSheets;
	xx.rel = "stylesheet";
	xx.href = href;
	xx.media = "specific"; // fetches without blocking render
	xx.onLoad = callback || function() {};
	ref.parentNode.insertBefore(xx, ref);
	//
	// Still more to code!
	//
}
