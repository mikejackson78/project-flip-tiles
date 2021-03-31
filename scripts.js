
let slider = document.getElementById("myRange");
let box = document.querySelector('.box__face');
let container = document.querySelector('.container');
let $container = $('.container');
let $boxContainer = $('.box');
let $box = $('.box__face');

let transform = 0;
let translate = 0;
let opacity = 1;
let scale = 1;

slider.oninput = function() {

	if( transform < 90 ) {

		transform += 1;
		translate += 1;

		$box.css({
			"transform":
			"rotateX(" + transform + "deg) translateZ(" + translate + "px)",
		});

		containerHeight = box.getBoundingClientRect().height;
		containerWidth = box.getBoundingClientRect().width;

		scale = 640 / containerWidth;

		$container.css({
			"height": containerHeight + "px",
		});

		$boxContainer.css({
			"height": containerHeight + "px",
			"transform": "scale(" + scale + ")"
		});
	}
};
