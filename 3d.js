// CSS 3D rendering engine
var meow3d = module.render3d = function(opts) {
	'use strict';

	// add parsing options
	opts = opts || {};

	// Preparing rendering state
	var width3d, height3d;
	var widthHalf3d, heightHalf3d;
	var screenMatrix = new Meow3d.matrix();
	var screenObjectMatrix = new Meow3d.matrix();

	// Preparing viewport and camera div
	/* refer 3d.css to get clear idea */
	var xCanvas = document.createElement('div');
	var xCamera = document.createElement('div');
	xCanvas.className = 'render-3d';
	xCamera.className = 'camera-3d';
	xCanvas.appendChild(xCamera);
	var meow = this;
	meow.domElement = xCanvas;

	//
	// Still more to code
	//
};
