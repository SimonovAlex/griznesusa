window.onload = function(){
	let socket = io.connect('http://localhost:80');
	socket.on('update_session', function(){
		let s_button = document.querySelector("#btn-search");
		console.log("Click!");
		s_button.click();
	});
};