$(function(){
	/* model object to store cat data*/
	let model = {
		currentCat:null,
		cats: [{src:"img/cat_picture1.jpg",count:0,name:"cat1"},
	{src:"img/cat_picture2.jpeg",count:0,name:"cat2"},
	{src:"img/cat_picture3.jpeg",count:0,name:"cat3"},
	{src:"img/cat_picture4.jpeg",count:0,name:"cat4"},
	{src:"img/cat_picture5.jpeg",count:0,name:"cat5"}]
	};
	/* octopus a medium bw model and view for communication.*/
	let octopus = {
		getCats:function(){
			return model.cats;
		},
		getCurrentCat:function(){
			return model.currentCat;
		},
		setCurrentCat: function(cat) {
			model.currentCat = cat;
		},
		init: function(){
			catList.init();
			catDisplay.init();
		}
	};
	/* views represent UI.*/
	let catList = {
		render: function() {
			let ele, cats;
			
			cats = octopus.getCats();
			for(let i=0; i<cats.length; i++) {
				ele = document.createElement("li");
				ele.innerText = cats[i].name;
				ele.setAttribute("class","cat");
				this.catListContainer.append(ele);
				ele.addEventListener("click",(function(catObj){
					let currentCat = catObj;
					return function(){
						catDisplay.catOnDisplay.attr("src",currentCat.src);
						catDisplay.catName.html(currentCat.name);
						octopus.setCurrentCat(currentCat);
						catDisplay.render();
					};
				}(cats[i])));

			}
			/*octopus.getCats().forEach(function(catObj){
				htmlStr += `<li class="cat">${catObj.name}</li>`;
			});*/
		},
		init: function() {
			this.catListContainer = $(".cat-list");
			catList.render();
			//set clicklistener on catlist item.
			
		}
	};

	let catDisplay = {
		render:function(){
			let currentCat = octopus.getCurrentCat();
			this.catName.html(currentCat.name);
			this.clickedCount.html(currentCat.count);
		},
		init:function(){
			this.catDisplayArea = $(".catDisplayArea");
			this.catOnDisplay = $(".catOnDisplay");
			this.catName = $(".catName");
			this.clickedCount = $(".clickedCount");
			this.catOnDisplay.attr("src",octopus.getCats()[0].src);
			this.catName.html(`${octopus.getCats()[0].name}`);
			this.clickedCount.html("0");
		}
	};


	octopus.init();
});