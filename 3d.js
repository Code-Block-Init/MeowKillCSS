// MeowKillCSS 3D rendering engine
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

	// Building renderable objects from the scene
	function xAddSceneObject(xScene, object) {
		var xRenderDOM = object.xRenderDOM;
		var xRender;
		if(typeof xRenderDOM === 'undefined') {
			xRenderDOM = object.xRenderDOM = render3d.xRender.factory(object);
		} if(xRenderDOM) {
			xRenderDOM.insertInto(xCamera);
		}
	}

	// Removing renderable object in scene
	function xRemoveSceneObject(xScene, object) {
		var xRenderDOM = object.xRenderDOM;
		if(xRenderDOM) {
			xRenderDOM.remove();
		}
	}

	// Synchronizing with add/remove objects in the scene
	function xSyncScene(xScene) {
		var m, object, xRenderDOM;

		// Inserting new objects into the DOM
		while(xScene.objectsAdded.length) {
			xAddSceneObject(xScene, xScene.objectsAdded[0]);
			xScene.objectsAdded.splice(0, 1);
		}

		// Removing deleted objects from the DOM
		while(xScene.objectsRemoved.length) {
			xRemoveSceneObject(xScene, xScene.objectsRemoved[0]);
			xScene.objectsRemoved.splice(0, 1);
		}
	}

	// Generating the transformation for the camera and depth
	function xCameraTransform(camera, presp) {
		var t = '';
		var i = camera.pos.length();
		camera.xMatrixInverse.xGetInverse(camera.matrix);
		t += 'translate3d(0, 0,'+ epsilon(presp) + 'px) ';
		t += x3d.toMatrix(camera.xMatrixInverse, true);
		t += 'translate3d('+ widthHalf3d + 'px,'+ heightHalf3d + 'px, 0)';
		return t;
	}

	// Applying CSS transform for camera and set prespective
	function updateCamera(camera) {
	var presp = 0.5 / Math.tan(camera.fov * π / 360) * height3d;
	var xTransform = xCameraTransform(camera, presp);
	xCamera.style.WebkitTransform = xTransform;
	xCamera.style.MozTransform = xTransform;
	xCamera.style.oTransform = xTransform;
	xCamera.style.msTransform = xTransform;
	xCamera.style.xTransform = xTransform;
	if(opts.presp !== false) {
		var element = opts.presp || x3d.presp || xCanvas;
		var p = presp + 'px';
		element.style.WebkitPresp = p;
		element.style.MozPresp = p;
		element.style.oPresp = p;
		element.style.msPresp = p;
		element.style.tPresp = p;
	} }
	meow.updateCamera = updateCamera;
};
