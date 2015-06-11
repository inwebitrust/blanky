Backbone.$ = $;

var App = {
  init: function init() {
	//this.tile = new TileView();
	var TileView = require('views/tile');
	this.tile = new TileView();
	var CrowdCollection = require('collections/crowd');
	this.crowd = new CrowdCollection([
		{firstName:"John", lastName:"Doe"},
		{firtsName:"Zinedine", lastName:"Zidane"}
	]);
    console.log(this.tile, this.crowd, 'App initialized.');
    var foundGuy = this.crowd.where({ firstName:"John" })[0];
    console.log(foundGuy);
    console.log(foundGuy.dispName());
  }
};

module.exports = App;
window.App = App;