
'use strict';

var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var MARGIN = 10;
var CLOUD_POSITION_X = 100;
var CLOUD_POSITION_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_POSITION_X + MARGIN, CLOUD_POSITION_Y + MARGIN, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);    
};
