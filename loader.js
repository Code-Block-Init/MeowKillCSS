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
	function toggleMedia() {
		var defined;
		for(var m = 0; m < meowStyleSheets.length; m++) {
			if(meowStyleSheets[m].href && meowStyleSheets[m].href.indexOf(href) > -1) {
				defined = true;
			}
		}
		if(defined) {
			xx.media = media || "all";
		} else {
			setTimeout(toggleMedia);
		}
	}
	toggleMedia();
	return xx;
}
