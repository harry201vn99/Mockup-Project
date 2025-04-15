"use strict";

function validate() {
	var errMsg="";
	var result = true;
	
	var contact = getContact();
	
	var state = document.getElementById("state").value;
	if (state == "")
	{
		errMsg = errMsg + "Please select your State\n";
		result = false;
	}
	else 
	{
		var tempMsg = check_state(state);
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
		storeBooking(contact,state,postcode);
	}
	
	return result;
}

function getContact(){
	var contactType="Unknown";
	var contactArray= document.getElementById("contact").getElementsByTagName("input");
	
	for (var i=0;i<contactArray.length;i++)
	{
		if (contactArray[i].checked)
		{
			contactType=contactArray[i].value;
		}
	}
	return contactType;
}

function check_state(state){
	var errMsg = "";
	var postcode = document.getElementById("postcode").value;
	switch (state)
	{
		case "vic":
		{
			if (!postcode.match(/^3[0-9]{3}$/) && !postcode.match(/^8[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Victoria\n";
			}
		}break;
		case "nsw":
		{
			if (!postcode.match(/^2[0-9]{3}$/) && !postcode.match(/^1[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for New South Wales\n";
			}
		}break;
		case "qld":
		{
			if (!postcode.match(/^4[0-9]{3}$/) && !postcode.match(/^9[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Queensland\n";
			}
		}break;
		case "nt":
		{
			if (!postcode.match(/^0[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Northern Territory\n";
			}
		}break;
		case "wa":
		{
			if (!postcode.match(/^6[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Western Australia\n";
			}
		}break;
		case "sa":
		{
			if (!postcode.match(/^5[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for South Australia\n";
			}
		}break;
		case "tas":
		{
			if (!postcode.match(/^7[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Tasmania\n";
			}
		}break;
		case "act":
		{
			if (!postcode.match(/^0[0-9]{3}$/))
			{
				errMsg = "Invalid Post Code for Australian Capital Territory\n";
			}
		}break;
		
	}
	return errMsg;
}

function storeBooking(contact,state,postcode)
{
	var cusfname = document.getElementById("cusfname").value;
	sessionStorage.cusfname=cusfname;
	
	var cuslname = document.getElementById("cuslname").value;
	sessionStorage.cuslname=cuslname;
	
	var email = document.getElementById("email").value;
	sessionStorage.email=email;
	
	var street = document.getElementById("street").value;
	sessionStorage.street=street;
	
	var sub = document.getElementById("sub").value;
	sessionStorage.sub=sub;
	
	sessionStorage.state=state;
	
	var postcode = document.getElementById("postcode").value;
	sessionStorage.postcode=postcode;
	
	var phonenum = document.getElementById('phonenum').value;
	sessionStorage.phonenum=phonenum;
	
	sessionStorage.contact=contact;
	
	var buys9 = document.getElementById("buys9").value;
	sessionStorage.buys9=buys9;
	
	var s9clr = document.getElementById("s9clr").value;
	sessionStorage.s9clr=s9clr;
	
	var s9strg = document.getElementById("s9strg").value;
	sessionStorage.s9strg=s9strg;
	
	var quanity = document.getElementById("quanity").value;
	sessionStorage.quanity=quanity;
}

function init () {
	var buyform=document.getElementById("buyform");
	buyform.onsubmit=storeBooking;
	buyform.onsubmit=validate;
}

window.onload = init;