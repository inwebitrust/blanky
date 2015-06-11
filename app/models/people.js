'use strict';

var People = Backbone.Model.extend({

	firstName:"",
	lastName:"",

	initialize:function(objData){
		this.firstName = objData.firstName;
		this.lastName = objData.lastName;
	},

	dispName:function(){
		console.log(this.firstName+" "+this.lastName);
	}

});

module.exports = People;