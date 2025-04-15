"use strict";

function validate(){
	var errMsg = "";								
	var result = true;								
	
	var paymentcard = document.getElementById("paymentcard").value;
	if (paymentcard == "")
	{
		errMsg = errMsg + "Please select your State\n";
		result = false;
	}
	else 
	{
		var tempMsg = check_paymentcard(paymentcard);
		if (tempMsg != "")
		{
			errMsg = errMsg +tempMsg;
			result = false;
		}
	}
	if (errMsg != ""){
		alert(errMsg);
	}
	if (result == true){
		getPayment(paymentcard,card);
	}
	return result;    
}

function calcCost(buys9,s9strg,quanity){
	var cost = 0;
	if (buys9.search("1s9")!= -1){
		cost = cost + 1199;
	}
	else{
		cost = cost + 1349;
	}
	if (s9strg.search("1s9strg")!= 0){
		cost = cost + 150;
	}
	else{
		cost = cost + 300;
	}
	return cost*quanity;
}

function check_paymentcard(paymentcard){
	var errMsg = "";
	var card = document.getElementById("card").value;
	var cvv = document.getElementById("cvv").value;
	switch (paymentcard)
	{
		case "visa":
		{
			if (!card.match(/^4[0-9]{15}$/))
			{
				errMsg = "Visa card must has 16 digits and start with a 4\n";
			}
			if (!cvv.match(/^[0-9]{3}$/))
				{
					errMsg = "Visa card must has 3 CVV digits\n";
				}
		}break;
		case "master":
		{
			if (!card.match(/^51[0-9]{14}$/) && !card.match(/^52[0-9]{14}$/) && !card.match(/^53[0-9]{14}$/) && !card.match(/^54[0-9]{14}$/) && !card.match(/^55[0-9]{14}$/))
			{
				errMsg = "MasterCard must has 16 digits and start with digits 51 through to 55\n";
			}
			if (!cvv.match(/^[0-9]{3}$/))
				{
					errMsg = "Master card must has 3 CVV digits\n";
				}
		}break;
		case "us":
		{
			if (!card.match(/^34[0-9]{13}$/) && !card.match(/^37[0-9]{13}$/))
			{
				errMsg = "American Express must has 15 digits and starts with 34 or 37\n";
			}
			if (!cvv.match(/^[0-9]{4}$/))
				{
					errMsg = "American Express card must has 4 CVV digits\n";
				}
		}break;
	}			
	return errMsg;
}

function getPayment(){
	var cost = 0;
	if(sessionStorage.cusfname != undefined){   
	
		document.getElementById("pay_cusfname").textContent = sessionStorage.cusfname;
		document.getElementById("pay_cuslname").textContent = sessionStorage.cuslname;
		document.getElementById("pay_email").textContent = sessionStorage.email;
		document.getElementById("pay_street").textContent = sessionStorage.street;
		document.getElementById("pay_sub").textContent = sessionStorage.sub;
		document.getElementById("pay_state").textContent = sessionStorage.state;
		document.getElementById("pay_postcode").textContent = sessionStorage.postcode;
		document.getElementById("pay_contact").textContent = sessionStorage.contact;
		document.getElementById("pay_phonenum").textContent = sessionStorage.phonenum;
		document.getElementById("pay_series").textContent = sessionStorage.buys9;
		document.getElementById("pay_color").textContent = sessionStorage.s9clr;
		document.getElementById("pay_storage").textContent = sessionStorage.s9strg;
		document.getElementById("pay_quanity").textContent = sessionStorage.quanity;
		cost = calcCost(sessionStorage.s9strg,sessionStorage.buys9,sessionStorage.quanity);
		document.getElementById("pay_cost").textContent = cost;
		
		document.getElementById("cusfname").value = sessionStorage.cusfname;
		document.getElementById("cuslname").value = sessionStorage.cuslname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("street").value = sessionStorage.street;
		document.getElementById("sub").value = sessionStorage.sub;
		document.getElementById("state").value = sessionStorage.state;
		document.getElementById("postcode").value = sessionStorage.postcode;
		document.getElementById("phonenum").value = sessionStorage.phonenum;
		document.getElementById("buys9").value = sessionStorage.buys9;
		document.getElementById("s9clr").value = sessionStorage.s9clr;
		document.getElementById("s9strg").value = sessionStorage.s9strg;
		document.getElementById("quanity").value = sessionStorage.quanity;
		
		document.getElementById("cost").value = cost;
	}
}

function cancelPayment(){
	window.location = "enquire.html";
}

function init () {
	getPayment();
	var payform = document.getElementById("payform");
	payform.onsubmit = getPayment;   
	payform.onsubmit = validate;
	
	var cancelButton = document.getElementById("cancelButton");
	cancelButton.onclick = cancelPayment;
}

window.onload = init;