Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _require = require('google-fonts-css2'),
    assembleCommon = _require.assembleCommon;

var buildLink = function buildLink(families, display) {
  if (typeof document === 'undefined') return;
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = assembleCommon(families, display);
  return link;
};

var GoogleFontsCss2Loader = function GoogleFontsCss2Loader(_ref) {
  var families = _ref.families,
      family = _ref.family,
      styles = _ref.styles,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'swap' : _ref$display;

  var _useState = react.useState(buildLink(families || [{
    family: family,
    styles: styles
  }], display)),
      _useState2 = _slicedToArray(_useState, 2),
      link = _useState2[0],
      setLink = _useState2[1];

  react.useEffect(function () {
    if (typeof document === 'undefined') return;
    document.head.appendChild(link);
    return function () {
      return document.head.removeChild(link);
    };
  }, [link]);
  react.useEffect(function () {
    setLink(buildLink(families || [{
      family: family,
      styles: styles
    }], display));
  }, [families, family, styles, display]);
  return null;
};

exports.default = GoogleFontsCss2Loader;
//# sourceMappingURL=prod.js.map
