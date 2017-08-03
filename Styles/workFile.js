	/*<p> Add a new book</p>   

git@github.com:Blaize3/NodeJS-Express-Postgres.git

							<form action="" method="" id="">
								<table>
									<tr>
										<td class="cell1"><label for="isbn">ISBN :</label></td>
										<td class="cell2"><input type="text" name="isbn" id="isbn" class="textField" placeholder="     Enter ISBN" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="bookTitle">Book Title :</label></td>
										<td class="cell2"><input type="text" name="bookTitle" id="bookTitle" class="textField" placeholder="     Enter a book title" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="genre">Book genre :</label></td>
										<td class="cell2">
											<select id="genre" class="textField">
												<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select a book genre</option>
											</select>
										</td>
									</tr>

									<tr>
										<td class="cell1"><label for="author">Author :</label></td>
										<td class="cell2"><input type="text" name="author" id="author" class="textField" placeholder="     Enter author's fullname" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="publisher">Publisher :</label></td>
										<td class="cell2"><input type="text" name="publisher" id="publisher" class="textField" placeholder="     Enter publisher's details" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="year"></label>Published year :</td>
										<td class="cell2"><input type="text" name="year" id="year" class="textField" placeholder="     1995, 2010, 2017" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="quantity">Quantity to stock :</label></td>
										<td class="cell2"><input type="number" name="quantity" id="quantity" class="textField" placeholder="     0" /></td>
									</tr>
									<tr>
										<td class="cell1"><label for="summary">Book summary :</label></td>
										<td class="cell2"><textarea id= "summary" name="summary" placeholder="     Book's summary" class="textField"></textarea></td>
									</tr>
									<tr>
										<td id="inBetween" colspan="2"></td>
									</tr>
									<tr>
										<td id="bottomFields" colspan="2">
											<input type="button" value="Add book" name="addBook" id="addBook">
											<br />
										</td>
									</tr>
								</table>
							</form>

							

	<p id="mainText"> Add a new book</p>
		<form action="" method="" id="">
			<table>
				<tr>
					<td class="cell1"><label for="genreID">Genre ID :</label></td>
					<td class="cell2"><input type="text" name="genreID" id="genreID" class="textField" placeholder="     Enter book genre id" /></td>
				</tr>
				<tr>
					<td class="cell1"><label for="bookGenre">Genre title :</label></td>
					<td class="cell2"><input type="text" name="bookGenre" id="bookGenre" class="textField" placeholder="     Enter genre title" /></td>
				</tr>
				<tr>
					<td class="cell1"><label for="description">Description :</label></td>
					<td class="cell2"><textarea id= "description" name="description" placeholder="     Genre description" class="textField"></textarea></td>
				</tr>
				<tr>
					<td class="cell1"><label for="dateCreated">Date :</label></td>
					<td class="cell2"><input type="date" name="dateCreated" id="dateCreated" class="textField" placeholder="     31/01/2017" /></td>
				</tr>
				<tr>
					<td id="inBetween" colspan="2"></td>
				</tr>
				<tr>
					<td id="bottomFields" colspan="2">
						<input type="button" value="Add Genre" name="addBook" id="addBook">
						<br />
					</td>
				</tr>
			</table>
		</form>

		

		<p id="mainText"> Update book quantity</p>
		<form action="" method="" id="">
			<table>
				<tr>
					<td class="cell1"><label for="genre">Book genre :</label></td>
					<td class="cell2">
						<select id="genre" class="textField">
							<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select a book</option>
						</select>
					</td>
				</tr>
				<tr>
					<td id="bottomFields" colspan="2">
						<p id="mainText"> Selected book summary</p>
						<table>
							<tr>
								<td>Book Title :</td>
								<td>Nil</td>
							</tr>
							<tr>
								<td>Author :</td>
								<td>Nil</td>
							</tr>
							<tr>
								<td>Qty Owned :</td>
								<td>Nil</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td id="inBetween" colspan="2"></td>
				</tr>
				<tr>
					<td id="bottomFields" colspan="2">
						<p id="mainText"> Data Entry</p>
						<label for="qty">Quantity :</label>
						<input type="number" name="qty" id="qty" class="textField" placeholder="     0" /><br /><br />
						<input type="button" value="Update Quantity" name="addBook" id="addBook">
						<br />
					</td>
				</tr>
			</table>
		</form>
		


<p id="mainText"> Delete a book</p>
		<form action="" method="" id="">
			<table>
				<tr>
					<td class="cell1"><label for="titleDel">ISBN/Book title :</label></td>
					<td class="cell2">
						<select id="titleDel" class="textField">
							<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select a book</option>
						</select>
					</td>
				</tr>
				<tr>
					<td id="bottomFields" colspan="2">
						<p id="mainText"> Selected book summary</p>
						<table>
							<tr>
								<td class="cell1">Book Title :</td>
								<td class="cell2">Nil</td>
							</tr>
							<tr>
								<td class="cell1">Author :</td>
								<td class="cell2">Nil</td>
							</tr>
							<tr>
								<td class="cell1">Qty Owned :</td>
								<td class="cell2">Nil</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td id="inBetween" colspan="2"></td>
				</tr>
				<tr>
					<td id="bottomFields" colspan="2">
						<input type="button" value="Delete book" name="addBook" id="addBook">
						<br />
					</td>
				</tr>
			</table>
		</form>*/

	
		<input text="password" name = "currentPassword" id = "currentPassword" value="" placeholder = "     Current password" /><br /><br />

		<input text="password" name = "newPassword" id = "newPassword" value="newPassword" placeholder = "     New password" /><br /><br />
		<input text="password" name = "confirmPassword" id = "" value="" placeholder = "     Confirm new password" /><br /><br /><br />
		<input type="button" value="Change password" name="changePassword" id="changePassword" class="submit" />

		'<input text="password" name = "currentPassword" id = "currentPassword" value="" placeholder = "     Current password" /><br /><br />'
		+ '<input text="password" name = "newPassword" id = "newPassword" value="newPassword" placeholder = "     New password" /><br /><br />'
		+ '<input text="password" name = "confirmPassword" id = "" value="" placeholder = "     Confirm new password" /><br /><br /><br />'
		+ '<input type="button" value="Change password" name="changePassword" id="changePassword" class="submit" />';


{
	"ISBN" 		: "",
	"Title" 	: "",
	"Author" 	: "",
	"Publisher" : "",
	"Year" 		: "",
	"Summary" 	: "",
	"Status" 	: "",
}


<div id= "bookGenre">Multivational Books</div>
							<table id="tableList">
								<tr>
									<th id="isbn">ISBN</th>
									<th id="bookTitle">Book Title</th>
									<th id="status">Status</th>
								</tr>
								<tr id = "rowColor">
									<td>1891984-49-7</td>
									<td>Think and Sell like a CEO</td>
									<td>Available</td>
								</tr>
								<tr id = "rowColor">
									<td>1891984-49-7</td>
									<td>Think and Sell like a CEO</td>
									<td>Available</td>
								</tr>
								<tr id = "rowColor">
									<td>1891984-49-7</td>
									<td>Think and Sell like a CEO</td>
									<td>Available</td>
								</tr>
								<tr id = "rowColor">
									<td>1891984-49-7</td>
									<td>Think and Sell like a CEO</td>
									<td>Available</td>
								</tr>
							</table>
					</div>


/*=  [
	{
	"ISBN" 		: "978-978-942-010-0",
	"Title" 	: "Ode",
	"Author" 	: "Oghogho Amieghomwan Eghosasere Ode",
	"Publisher" : "iCreativeHedgs Platform",
	"Year" 		: "2017",
	"Summary" 	: "This is a biography.",
	"Status" 	: "Available",
},

{
	"ISBN" 		: "9780471163145",
	"Title" 	: "How to be a great communicator",
	"Author" 	: "Nido R. Qubein",
	"Publisher" : "Pinnacle of Grace",
	"Year" 		: "1997",
	"Summary" 	: "Best books on soft skills",
	"Status" 	: "Available",
},

{
	"ISBN" 		: "1891984497",
	"Title" 	: "Think and sell like a CEO",
	"Author" 	: "Anthony Parinello",
	"Publisher" : "Entrepreneur press",
	"Year" 		: "2002",
	"Summary" 	: "Master the act of selling",
	"Status" 	: "Available",
},

{
	"ISBN" 		: "055327757-x",
	"Title" 	: "The greatest sales man in the world",
	"Author" 	: "OG Mandino",
	"Publisher" : "Bantain Books",
	"Year" 		: "1985",
	"Summary" 	: "Great book.",
	"Status" 	: "Available",
}

];*/