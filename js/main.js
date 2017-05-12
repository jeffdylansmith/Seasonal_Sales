//console.log("hey");
var display = document.getElementById("display");
var selector = document.getElementById("selector");
var newprice = 0;
function populate(){
	let masterCard = ``;
	for (x in products){
		if (products[x].category_id == selector.value){
			newprice = (products[x].price - (products[x].price * catagories[selector.value - 1].discount)).toFixed(2);
		} else {
			newprice = (products[x].price).toFixed(2);
		}
		let card = `<h2>${products[x].name}</h2>
					<p>${newprice}</p>`
		masterCard += card;			
		}
		display.innerHTML = masterCard;			 
};	
selector.addEventListener("change", populate);
var masterCategories = [];
var products = [];
var catagories = [];
function callBack(information){
	console.log(information.products);
	products = information.products;
}
function catcallBack(information){
	console.log(information.categories);
	catagories = information.categories;
	//masterCategories.push(catagories)
	//populate(catagories);
	console.log("catagories", catagories);
	populate();
}
function getProducts(prod){
	Seasonalsales.productsLoad(prod);
	getCatagories("catagories.json");
}
function getCatagories(cata){
	Seasonalsales.catagoriesLoad(cata);
}
getProducts("products.json");
