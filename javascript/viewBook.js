// variable declaration
let bookGenre;
let tableList;

function respondToClick(e){
	let allListItem = document.getElementsByTagName("li");
	for (let i = 0; i < allListItem.length; i++){
		allListItem[i].setAttribute("class", "")
	}

	e.target.className = "selected";
	//console.log(e.target.innerHTML);
	document.getElementById("bookGenre").innerHTML = e.target.innerHTML;

	// "Select * from Books where Genre = '" + e.target.innerHTML + "';"


	document.getElementById("tableList").innerHTML = getTableListContent(e);
}

function bookGenreSelector(e){
	let file;

	if (e.target.innerHTML.toLowerCase() == "adventure"){
		file = adventure;
	}else if (e.target.innerHTML.toLowerCase() == "biography"){
		file = biography;
	}else if (e.target.innerHTML.toLowerCase() == "fantasy"){
		file = fantasy;
	}else if (e.target.innerHTML.toLowerCase() == "horror"){
		file = horror;
	}else if (e.target.innerHTML.toLowerCase() == "motivational"){
		file = motivational;
	}else if (e.target.innerHTML.toLowerCase() == "religion"){
		file = religion;
	}else{
		file = [];
	}
	return file;
}

// to help user generate book genre when viewing a particular book
function aBookSelectedfromTable(e){
	let file;
	let bookChioceGenre = document.getElementById("bookGenre").innerHTML;

	if (bookChioceGenre.toLowerCase() == "adventure"){
		file = adventure;
	}else if (bookChioceGenre.toLowerCase() == "biography"){
		file = biography;
	}else if (bookChioceGenre.toLowerCase() == "fantasy"){
		file = fantasy;
	}else if (bookChioceGenre.toLowerCase() == "horror"){
		file = horror;
	}else if (bookChioceGenre.toLowerCase() == "motivational"){
		file = motivational;
	}else if (bookChioceGenre.toLowerCase() == "religion"){
		file = religion;
	}else{
		file = [];
	}
	return file;
}

function getTableListContent(e){

	// myData = require(books.json);
	let data = bookGenreSelector(e);

    if (data.length === 0 || data.length == undefined){
    	tableList = '<p><br /><br />No book found in this genre.</p>';
    }else{
    	tableList = '<table id="tableList"><tr><th id="isbn">ISBN</th><th id="bookTitle">Book Title</th><th id="status">Status</th></tr>';
		
		for (let i = 0; i < data.length; i++)
		{
			tableList += '<tr class = "rowColor"><td class = "bookClicked" id="wantedBook">' + data[i].ISBN + '</td><td class = "bookClicked">' + data[i].Title + '</td><td class = "bookClicked">' + data[i].Status + '</td></tr>';
		}

		tableList += '</table>';
    }

	return tableList;
}

function respondToBookClick(e){
	console.log("click");	
}

function init(){
	let allListItem = document.getElementsByTagName("li");
	for (let i = 0; i < allListItem.length; i++){
		allListItem[i].addEventListener("click", respondToClick, false);
	}

	let aBook = document.getElementsByTagName("tr");
	for (let i = 0; i < aBook.length; i++){
		aBook[i].addEventListener("click", respondToBookClick, false);
	}


}

window.addEventListener("load", init, false);