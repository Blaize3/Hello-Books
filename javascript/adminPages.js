// Variable Declaration
	let onScreenPage = ""; 
	let htmlContentString;
	let listItem;

// Functions
	function administratorLogin(){

		window.location = "borrowBook.html";
	}

	function addABookScreen(obj){
		setSelectedItem(obj);

		// screen determinat variable
		onScreenPage = "addABookScreen";
		
		htmlContentString =	'<p id="mainText"> Add a new book</p>' + '<form action="" method="" id=""> <table><tr> '
		+ '<td class="cell2"><input type="text" name="isbn" id="isbn" class = "textField" placeholder="     Book ISBN" /></td></tr><tr>'
		+ '<td class="cell2"><input type="text" name="bookTitle" id="bookTitle" class="textField" placeholder="     Book title" /></td></tr><tr>'
		+ /*888888     SELECT INPUT       8888888888*/

		 '<td class="cell2"><select id="genre" class="textField"> ' + 
		 '<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select book genre</option>'

		  /*888888     SELECT INPUT  END     8888888888*/
		+ '</select></td></tr><tr><td class="cell2"><input type="text" name="author" id="author" class="textField" placeholder="     Author fullname" /></td>' 
		+ '</tr><tr><td class="cell2"><input type="text" name="publisher" id="publisher" class="textField" placeholder="     Publisher details" /></td></tr>' 
		+ '<tr><td class="cell2"><input type="text" name="year" id="year" class="textField" placeholder="     &copy; 2015" /></td>'
		+ '</tr><tr><td class="cell2"><input type="number" name="quantity" id="quantity" class="textField" placeholder="     Quantity" /></td>'
		+ '</tr><tr><td class="cell2"><textarea id= "summary" name="summary" placeholder="     Books summary" class="textField"></textarea></td></tr>'
		+ '<tr><td id="inBetween" ></td></tr><tr><td class="cell2"><input type="button" value="Add book" name="addBook" id="addBook" class="textField"><br /></td></tr></table></form>';


		//get content element id
		const addBookElement = document.getElementById("mainContentArea");
		addBookElement.innerHTML = htmlContentString;
	}// end function addABookScreen

	function createABookGenreScreen(obj){
		setSelectedItem(obj);

		// screen determinat variable
		onScreenPage = "createABookGenreScreen";
		htmlContentString = '<p id="mainText">Create a new book genre</p><form action="" method="" id=""><table><tr>'
							+'<td class="cell2"><input type="text" name="genreID" id="genreID" class="textField" placeholder="     Genre ID" /></td>'
							+'</tr><tr><td class="cell2"><input type="text" name="bookGenre" id="bookGenre" class="textField" placeholder="     Genre title" /></td>'
							+'</tr><tr><td class="cell2"><textarea id= "description" name="description" placeholder="     Description" class="textField"></textarea></td>'
							+'</tr><tr><td class="cell2"><input type="date" name="dateCreated" id="dateCreated" class="textField" placeholder="     mm/dd/yyyy" /></td>'
							+'</tr><tr><td id="inBetween" </td></tr><tr><td class="cell2"><input type="button" value="Add genre" name="addBook" id="addBook" class="textField"><br />'
							+'</td></tr></table></form>';

		//get content element id
		const addBookElement = document.getElementById("mainContentArea");
		addBookElement.innerHTML = htmlContentString;
	}// end Function createABookGenreScreen

	function updateBookQuantityScreen(obj){
		setSelectedItem(obj);

		// screen determinat variable
		onScreenPage = "updateBookQuantityScreen";
		htmlContentString = '<p id="mainText"> Update book quantity</p><form action="" method="" id=""><table><tr><td class="cell2">'
							+ '<select id="titleQty" class="textField">'

							+/*888888     SELECT INPUT       8888888888*/

								'<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select ISBN/Book title</option>'

							+/*888888     SELECT INPUT  END     8888888888*/

							
							 '</select></td></tr><tr><td id="bottomFields"><p id="mainText"> Selected book summary</p><table><tr><td class="cell11">Book Title :</td><td class="cell22">Nil</td></tr><tr><td class="cell11">Author :</td><td class="cell22">Nil</td>'
							+'</tr><tr><td class="cell11">Qty Owned :</td><td class="cell22">Nil</td></tr></table></td></tr><tr><td id="inBetween" ></td></tr><tr><td class="cell2"><p id="mainText"> Data Entry</p>'
							+'<input type="number" name="qty" id="qty" class="textField" placeholder="     Quantity" /><br /><br /><input type="button" value="Update quantity" name="addBook" id="addBook" class="textField">'
							+'<br /></td></tr></table></form>';

		//get content element id
		const addBookElement = document.getElementById("mainContentArea");
		addBookElement.innerHTML = htmlContentString;
	}// end function updateBookQuantityScreen

	function deleteABookScreen(obj){
		setSelectedItem(obj);

		// screen determinat variable
		onScreenPage = "deleteABookScreen";
		htmlContentString = '<p id="mainText"> Delete a book</p><form action="" method="" id=""><table><tr><td class="cell2">'
							+ '<select id="titleDel" class="textField">'


							+ /*888888     SELECT INPUT       8888888888*/

							'<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select ISBN/Book title</option>'

							  /*888888     SELECT INPUT  END     8888888888*/
							+'</select></td></tr><tr><td id="bottomFields" colspan="2"><p id="mainText"> Selected book summary</p><table><tr><td class="cell11">Book Title :</td><td class="cell22">Nil</td></tr><tr><td class="cell11">Author :</td><td class="cell22">Nil</td></tr>'
							+'<tr><td class="cell11">Qty Owned :</td><td class="cell22">Nil</td></tr></table></td></tr><tr><td id="inBetween" colspan="2"></td></tr><tr><td id="bottomFields" colspan="2"><input type="button" value="Delete book" name="addBook" id="addBook" class="textField">'
							+'<br /></td></tr></table></form>';

		//get content element id
		const addBookElement = document.getElementById("mainContentArea");
		addBookElement.innerHTML = htmlContentString;
	}// end function deleteABookScreen

	function modifyBookInfoScreen(obj){
		setSelectedItem(obj);

		// screen determinat variable
		onScreenPage = "modifyBookInfoScreen";
		htmlContentString = '<p id="mainText"> Update book information</p><form action="" method="" id=""><table><tr><td class="cell2">'
							+ '<select id="titleDel" class="textField">'


							+ /*888888     SELECT INPUT       8888888888*/

							'<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select ISBN/Book title</option>'

							  /*888888     SELECT INPUT  END     8888888888*/
							+'</select></td></tr><tr><td class="cell2">'
							+ '<br /><br /><br /><select id="titleDel" class="textField">'


							+ /*888888     SELECT INPUT       8888888888*/

							'<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select book property</option>'
							+'<option value ="ISBN">ISBN</option>'
							+'<option value ="Title">Title</option>'
							+'<option value ="Author">Author</option>'
							+'<option value ="Publisher">Publisher</option>'
							+'<option value ="Year">Year</option>'
							+'<option value ="Summary">Summary</option>'
							+'<option value ="Status">Status</option>'

							  /*888888     SELECT INPUT  END     8888888888*/
							+'</select></td></tr>' + '<tr><td class="cell2"><p id="mainText"> Data Entry</p>'
							+'<input type="text" name="propValue" id="propValue" class="textField" placeholder="     Property value" /><br /><br /><input type="button" value="Update information" name="addBook" id="addBook" class="textField">'
							+'<br /></td></tr></table></form>'

		;

		const addBookElement = document.getElementById("mainContentArea");
		addBookElement.innerHTML = htmlContentString;
	}// end function modifyBookInfoScreen

	function setSelectedItem(e){
		 document.getElementById("addABookScreen").setAttribute("class", "");
		 document.getElementById("createABookGenreScreen").setAttribute("class", "");
		 document.getElementById("updateBookQuantityScreen").setAttribute("class", "");
		 document.getElementById("deleteABookScreen").setAttribute("class", "");
		 document.getElementById("modifyBookInfoScreen").setAttribute("class", "");

		e.target.className ="selected";
	}

	//function administratorLogin(){
	//	window.location = "adminControlPanel.html";
	//}


	//set up event handlers
	function  init(){
		listItem = document.getElementById("addABookScreen");
			listItem.addEventListener("click", addABookScreen, false);

		listItem = document.getElementById("createABookGenreScreen");
			listItem.addEventListener("click", createABookGenreScreen, false);

		listItem = document.getElementById("updateBookQuantityScreen");
			listItem.addEventListener("click", updateBookQuantityScreen, false);

		listItem = document.getElementById("deleteABookScreen");
			listItem.addEventListener("click", deleteABookScreen, false);

		listItem = document.getElementById("modifyBookInfoScreen");
			listItem.addEventListener("click", modifyBookInfoScreen, false);

		listItem = document.getElementById("signupAdmin");
			listItem.addEventListener("click", administratorLogin, false);

		//addABookScreen(window.onload);
	}

	window.addEventListener("load", init, false);