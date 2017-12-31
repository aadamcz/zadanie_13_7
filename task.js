var fs = require("fs");

//odczytać zawartość katalogu
fs.readdir("./dir", function(err, files) {
	console.log(files);
	fs.writeFile("message.txt", files , function(err, data) {//wpisać do nowo utworzonego pliku
	if (err) throw err;
		console.log("The file has been saved!");
	});
});



