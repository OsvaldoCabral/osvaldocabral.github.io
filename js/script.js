
function abrirFecharMenu() {
	var btnMenu = "confinado";
	var btn = document.getElementById("bs-example-navbar-collapse-1");

	if (btnMenu === "expandir") {
		btn.className = "navbar-collapse collapse in";
		btnMenu = "confinado";
	} else {
		btn.className = "navbar-collapse collapse";
		btnMenu = "expandir";
	}
}
