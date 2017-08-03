let user = users;
//let isLogin = false;
//let myEmail = document.getElementById("loginEmail").value;
//let myPassword = document.getElementById("password").value;



function logUserIn(){
	// retrieve email and password from the log in form
	let myEmail = document.getElementById("loginEmail").value;
	let myPassword = document.getElementById("password").value;
	let isLogin = false;

	for (let i = 0; i < user.length; i++){

		//console.log( typeof myEmail);
		//console.log( typeof myPassword);
		//console.log( typeof String(user[i].email));
		//console.log( typeof String(user[i].password));

		if (myEmail == String(user[i].email)){
			if (myEmail == String(user[i].email)){
				isLogin = true;
				break;
			}
		}
	}

	
	//if (isLogin){
		//isLogin = false;
		window.location = "user.html"
	//}else{
	//	try{
	//		isLogin = false;
	//		document.getElementById("invalidDetails").innerHTML = "<p>invalid email or password.</p>"
	//		document.getElementById("emailId").value = "-";
	//		document.getElementById("password").value = "-";
	//	}catch(exp){
	//		isLogin = false;
	//	}
	//}	
}

function init(){
	let myEmail = document.getElementById("loginEmail").value;
	let myPassword = document.getElementById("password").value;
	const loginButton = document.getElementById("signup");
	loginButton.addEventListener("click", logUserIn, false);

}

window.addEventListener("load", init, false);