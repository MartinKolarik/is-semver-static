(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.isSemverStatic = factory());
}(this, (function () {
	'use strict';

	var STATIC_PATTERN = /^[=v]*\d+\.\d+\.\d+[0-9A-Za-z-]*$/;

	var main = function (version) {
		return STATIC_PATTERN.test(version);
	};

	return main;

})));
