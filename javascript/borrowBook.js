// variable declaration
let settingHead;
let settingBody;


function respondToClick(e){
	let allListItem = document.getElementsByTagName("li");
	for (let i = 0; i < allListItem.length; i++){
		allListItem[i].setAttribute("class", "")
	}

	e.target.className = "selected";
	//console.log(e.target.innerHTML);
	document.getElementById("settingHead").innerHTML = e.target.innerHTML;
	document.getElementById("settingBody").innerHTML = profile(e);
}

function init(){
	let allListItem = document.getElementsByTagName("li");
	for (let i = 0; i < allListItem.length; i++){
		allListItem[i].addEventListener("click", respondToClick, false);
	}
}

function profile(e){
	//settingBody = '<p><img src="../images/map.jpg" id="" height="200px" width="160px"></p><p><input type="button" value="Upload" name="upload" id="upload" class="submit" /></p>';
	if (e.target.innerHTML.toLowerCase() === "profile"){
		settingBody = '<p><img src="../images/map.jpg" id="" height="200px" width="160px"></p><p><input type="button" value="Upload" name="upload" id="upload" class="submit" /></p>';
	}else if (e.target.innerHTML.toLowerCase() === "history"){
		settingBody = '<p><br /><br />No history.</p>';
	}else if (e.target.innerHTML.toLowerCase() === "borrowed books"){
		settingBody = '<p><br /><br />No books borrowed.</p>';
	}else if (e.target.innerHTML.toLowerCase() === "change password"){
		settingBody = '<br /><br /><br /><input type="password" class ="inputText" name = "currentPassword" id = "currentPassword" value="" placeholder = "     Current password" /><br /><br /><br />'
					+ '<input type="password" class ="inputText" name = "newPassword" id = "newPassword" value="" placeholder = "     New password" /><br /><br />'
					+ '<input type="password" class ="inputText" name = "confirmPassword" id = "" value="" placeholder = "     Confirm new password" /><br /><br /><br />'
					+ '<input type="button" value="Change password" name="changePassword" id="changePassword" class="submit" />';;
	}else if (e.target.innerHTML.toLowerCase() === "logout"){
		settingBody = '<p><br /><br />I m going to have fun with you.</p>';
	}else if (e.target.innerHTML.toLowerCase() === "notifications"){
		settingBody = '<p><br /><br />No notifications.</p>';
	}else{
		settingBody = '<p><br /><br />Sorry!!!</p>';
	}
	return settingBody;
}

window.addEventListener("load", init, false);