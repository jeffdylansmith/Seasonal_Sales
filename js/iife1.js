var Seasonalsales = (function(){
	var productsi = [];

	return {
		productsLoad : function(info){
			let storeArray = {};
			let newloader = new XMLHttpRequest();
			newloader.addEventListener("load",function(){
				storeArray = JSON.parse(this.responseText);
				console.log(storeArray.products);
				callBack(storeArray);
			});
			newloader.open("GET", info);
			newloader.send();
		}
	}			
})();