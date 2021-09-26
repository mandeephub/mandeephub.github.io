function changetheme(){

	let color = document.getElementById("themechanger").value;

	if(color == 'white'){	
		document.getElementById("themechanger").value = "black";

		document.getElementById("background").style.background = "#000";

		document.getElementById("background").style.transition = "all 0.5s";

		document.getElementById("heading").style.color = "#fff";

		document.getElementById("project").style.color = "#fff";

		document.getElementById("subheading",).style.color = "#fff";

		
		document.getElementById("profile").src = "assets/images/profile.png";

		let btns = document.getElementById("btns");

		btns.classList.remove("reverse");
	}
	else{
		document.getElementById("themechanger").value = "white";

		document.getElementById("heading",).style.color = "#000";

		document.getElementById("subheading",).style.color = "#000";
		
		document.getElementById("background").style.background = "#fff";

		document.getElementById("project").style.color = "#000";

		document.getElementById("background").style.transition = "all 0.5s";
		
		document.getElementById("profile").src = "assets/images/profile-dark.png";

		let btns = document.getElementById("btns");

		btns.classList.add("reverse");
	
	}

}

AOS.init();