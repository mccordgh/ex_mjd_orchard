"use strict";

let Plant = function(){
	this.growthCount = 0;
	this.height = 0;
	this.startHeight = 0;
};

Plant.prototype.increaseHeight = function(value){
	this.height += value;
};

Plant.prototype.decreaseHeight = function(value){
	this.height -= value;
};

let Tree = function(){
	this.branches = 0;
};
Tree.prototype = new Plant();

Tree.prototype.grow = function(value){
	this.increaseHeight(value);

	this.growthCount++;

	if ((this.height - this.startHeight) > 9) {
		this.branches += 1;
		this.startHeight = this.height;
	}

	if (this.growthCount === 30)
			window.clearInterval(intervalID);
			
	if (parseInt(this.growthCount) % 10 === 0){
			PearTree.trim(10);
			OakTree.trim(10);
	}

};

Tree.prototype.trim = function(value){
	this.decreaseHeight(value);
	this.branches -= 1;
};

let PearTree = new Tree();
let OakTree = new Tree();

var intervalID = window.setInterval(increaseTreeHeights, 1000);

function increaseTreeHeights(){

	PearTree.grow(6);
	OakTree.grow(9);

	outputTrees();
}
function outputTrees(){
	window.document.write(`<h3>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches</h3>`);
	window.document.write(`<h3>Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches</h3>`);
	window.document.write("<br/>");
}