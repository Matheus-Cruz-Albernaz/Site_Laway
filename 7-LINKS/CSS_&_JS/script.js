window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    console.log(window.scrollY)
    header.classList.toggle('scrolling-active', windowPosition);
})

function OnClick(location) {
	document.location.href=location;
}

var loader = document.getElementById("preloader");
	window.addEventListener("load", function(){
		loader.style.display = "none";
	})