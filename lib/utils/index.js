'use strict';

var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return !!str.match(/^\+?[\d\-\#\*\.\(\)]+$/);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return !!str.match(/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/);
};

module.exports = {
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};