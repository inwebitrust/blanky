'use strict';

var People = require("../models/people");

var CrowdCollection = Backbone.Collection.extend({
	model:People
});

module.exports = CrowdCollection;