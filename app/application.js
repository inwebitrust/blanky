Backbone.$ = $;

var App = {
  init: function init() {
	//this.tile = new TileView();
	var TileView = require('tile');
	this.tile = new TileView();
    console.log(this.tile, 'App initialized.');
  }
};

module.exports = App;
window.App = App;