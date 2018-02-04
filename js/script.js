
function abrirFecharMenu() {
	
	try { 
		var btn = document.getElementById("bs-example-navbar-collapse-1");
	
		if (btn.className === "navbar-collapse collapse") {
			btn.className = "navbar-collapse collapse in";
		} else {
			btn.className = "navbar-collapse collapse";
			return;
		}
	
	} catch(e) {
		
	}
}
