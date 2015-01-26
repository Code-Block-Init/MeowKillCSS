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

	// Setting CSS 3D viewport size
	meow.setSize = function() {
		widthHalf3d = width3d / 2;
		heightHalf3d = height3d / 2;
	};

	// Rendering the scenes using camera
	// DOM renderers created especially for objects
	meow.render = function(xScene, camera) {
		var xObjects, object;
		var x, xl;
		var xVisible;
		var xColor;
		var xLineLength;
		var xSVG;
		var xRenderDOM;
		xScene.updateMatrix();
		syncScene(xScene);
		updateCamera(camera);
		xObjects = xScene.xObjects;
		for(x = 0, xl = xObjects.length; x < xl; x++) {
			object = xObjects[x];
			xRenderDOM = object.xRenderDOM;

			// Ignoring objects that have no updates
			if(!xRenderDOM || !xRenderDOM.requireRender) {
				continue;
			}

			// Applying visibility state
			if(object.xVisible) {
				if(!xRenderDOM.xVisible) {
					xRenderDOM.show();
				}
			} else {
				if(xRenderDOM.xVisible) {
					xRenderDOM.hide();
				}
			}
			// Updating objects marking it as done
			xRenderDOM.update();
			xRenderDOM.requireRender = false;
		}
	};

	//
	// Still more to code
	//
};
