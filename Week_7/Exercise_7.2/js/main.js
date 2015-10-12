//code leveraged from Lesson 7.2.2: Removing and Applying CSS Classes

function transition() {
document.getElementById("mainContent").onclick = function() {
	if (document.getElementById("mainContent").className == "divcssclass") {
		document.getElementById("mainContent").className = "";
	} else {
		document.getElementById("mainContent").className = "divcssclass";
	};
}};

window.onload = function() {
	transition();
}
