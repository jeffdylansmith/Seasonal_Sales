var Seasonalsales = (function(oldseasonal){	
oldseasonal.catagoriesLoad = function(info){
	let catArray = {};
	let newloader = new XMLHttpRequest();
	newloader.addEventListener("load",function(){
		catArray = JSON.parse(this.responseText);
		console.log(catArray.categories);
		catcallBack(catArray);
	});
	newloader.open("GET", info);
	newloader.send();
}
return oldseasonal;		
})(Seasonalsales);