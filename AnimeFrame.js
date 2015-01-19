var AnimeFrame = function() {
	// Animation Frame
	'use strict';
	if(!window.AnimeFrame) {
		window.AnimeFrame = function() {
			return window.webkitAnimeFrame ||
			window.mozAnimeFrame ||
			window.oAnimeFrame ||
			window.msAnimeFrame ||
			function(callback, element) {
				// callback => callback for AnimeFrame
				// element => DOM element
				window.setTimeout(callback, 1000/60);
			};
		};
	}
};
