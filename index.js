var postcss = require('postcss');

/**
 * Gets the multiplier value.
 * @param  {Number} declValue
 * @return {Number}
 */
var valueMultiplier = function (declValue, multiplier) {
	var val = parseFloat(declValue) || 1;

	return multiplier * val;
};

module.exports = postcss.plugin('postcss-rows', function (opts) {
	opts = opts || {};
	var multiplier = opts.multiplier || '16';
	var units = opts.units || 'rows';

  	return function (css) {
		css.eachDecl(function transformDecl (decl) {

			// Use new RegExp to capture var
			// var regexp = new RegExp('/rows\([0-9]*.\)/gim');
			var regexp = new RegExp('(\\d*\\.?\\d+)' + units, 'gi');

			// Replace each vr unit value in the decl.value, e.g. shorthand properties.
			decl.value = decl.value.replace(regexp, function ($1) {
				return valueMultiplier($1, multiplier) + 'px';
			});
    	});
  	};
});