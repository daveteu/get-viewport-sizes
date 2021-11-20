"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var debounce = function debounce(func) {
	var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timer = void 0;
	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		clearTimeout(timer);
		timer = setTimeout(function () {
			func.apply(undefined, args);
		}, timeout);
	};
};

var getInnerHeight = function getInnerHeight() {
	var getHeight = function getHeight() {
		var vh = document.documentElement.clientHeight * 0.01;
		document.documentElement.style.setProperty("--vh", vh * 100 + "px");
	};

	window.addEventListener("resize", debounce(getHeight, 200));
	window.addEventListener("orientationchange", debounce(getHeight, 200));

	getWidth();
};

var getInnerWidth = function getInnerWidth() {
	var getWidth = function getWidth() {
		var vw = document.documentElement.clientWidth * 0.01;
		document.documentElement.style.setProperty("--vw", vw * 100 + "px");
	};

	window.addEventListener("resize", debounce(getWidth, 200));
	window.addEventListener("orientationchange", debounce(getWidth, 200));

	getWidth();
};

var getSizes = function getSizes() {
	if (typeof window !== "undefined") {
		getInnerHeight();
		getInnerWidth();
	}
};
exports.default = getSizes;