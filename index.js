const STATIC_PATTERN = /^[=v]*\d+\.\d+\.\d+[0-9A-Za-z-]*$/;

/**
 * @param {string} version
 * @returns {boolean}
 */
module.exports = (version) => {
	return STATIC_PATTERN.test(version);
};
