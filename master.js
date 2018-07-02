function Guide() {
	var audio = document.getElementById('audiotag');
	// var button = document.getElementById('play-btn');
	if (audio.duration > 0 && !audio.paused) {
		audio.pause();
		audio.currentTime = 0;
	} else {
		audio.play();
		// button.style.backgroundColor = "red";
	}
}
window.onscroll = function() {
	var height = window.innerHeight;
	console.log(height);
	var nav = document.getElementById('nav');
	if ( window.pageYOffset > 0.64 * height ) {
        nav.classList.add("nav-shadow");
	 	} else {
    	nav.classList.remove("nav-shadow");
	}
}

function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// rgb(76,104,136)"
