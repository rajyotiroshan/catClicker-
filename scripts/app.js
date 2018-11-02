$(function(){
	/* model object to store cat data*/
	let model = {
		cats: [{src:"img/cat_picture1.jpg",count:0,name:"cat1"},
	{src:"img/cat_picture2.jpg",count:0,name:"cat2"},
	{src:"img/cat_picture3.jpg",count:0,name:"cat3"},
	{src:"img/cat_picture4.jpg",count:0,name:"cat4"},
	{src:"img/cat_picture5.jpg",count:0,name:"cat5"}]
	};
	/* octopus a medium bw model and view for communication.*/
	let octopus = {
		getCats:function(){
			return model.cats;
		},
		init: function(){
			catList.init();
			catDisplay.init();
		}
	};
	/* views represent UI.*/
	let catList = {
		render: function() {
			htmlStr = '';
			octopus.getCats().forEach(function(catObj){
				htmlStr += `<li class="cat">${catObj.name}</li>`;
			});
			this.catListContainer.html(htmlStr);
		},
		init: function() {
			this.catListContainer = $(".cat-list");
			catList.render();
			
		}
	};

	let catDisplay = {
		render:function(){

		},
		init:function(){
			this.catDisplayArea = $(".catDisplayArea");
			this.catName = $(".catName");
			this.clickedCount = $(".clickedCount");
			let defaultImg = `<img src="${octopus.getCats()[0].src}">`;
			this.catDisplayArea.html(defaultImg);
			this.catName.html(`${octopus.getCats()[0].name}`);
			this.clickedCount.html("0");
		}
	};


	octopus.init();
});