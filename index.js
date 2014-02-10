'use strict';

var prefix = require('prefix');
var transform = prefix('transform');


exports = module.exports = center;

function center(target, container, renderer) {
  var pos = {
    x: centerX(target, container, false),
    y: centerY(target, container, false)
  };

  if (renderer === false) {
    return pos;
  }

  if (typeof renderer === 'function') {
    renderer(target, pos);
    return;
  }

  target.style[transform] = 'translateX(' + pos.x + 'px) translateY(' + pos.y + 'px)';
}


exports.x = centerX;

function centerX(target, container, renderer) {
  // in case `translateX` has already been defined
  target.style[transform] = 'translateX(0)';

  var x = target.offsetLeft;
  var targetW = target.clientWidth;
  var containerW = (container !== undefined && container !== window)
    ? container.clientWidth
    : window.innerWidth;

  var transX = ((containerW - targetW) >> 1) - x;

  if (renderer === false) {
    return transX;
  }

  if (typeof renderer === 'function') {
    renderer(target, {
      x: transX
    });
    return;
  }

  target.style[transform] = 'translateX(' + transX + 'px)';
}


exports.y = centerY;

function centerY(target, container, renderer) {
  // in case `translateY` has already been defined
  target.style[transform] = 'translateY(0)';

  var targetH = target.clientHeight;
  var containerH;
  var y;

  if (container !== undefined && container !== window) {
    containerH = container.clientHeight;
    y = target.offsetTop;
  } else {
    containerH = window.innerHeight;
    y = target.getBoundingClientRect().top;
  }

  var transY = ((containerH - targetH) >> 1) - y;

  if (renderer === false) {
    return transY;
  }

  if (typeof renderer === 'function') {
    renderer(target, {
      y: transY
    });
    return;
  }

  target.style[transform] = 'translateY(' + transY + 'px)';
}
