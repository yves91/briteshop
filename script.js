//Object constructor function for Product object
function Product(item_cost, item_currency, item_name){
		this.item_cost = item_cost,
		this.item_currency = item_currency,
		this.item_name = item_name
	}

	let item1 = new Product(2, "£", "Chicken Wing(s)");
	let item2 = new Product(2, "£", "Muffin(s)");
	let item3 = new Product(10, "£", "Beer(s)");
	
//Function to store all data. This data will all be displayed in modal box on "Cart" button click.

function setData(){

	//Set quantity * value of items to session storage
	sessionStorage.setItem("item_total_value_1", item1.item_cost * document.getElementById("quantity").value);
	sessionStorage.setItem("item_total_value_2", item2.item_cost * document.getElementById("quantity2").value);
	sessionStorage.setItem("item_total_value_3", item3.item_cost * document.getElementById("quantity3").value);

	//Set currency of items to session storage
	sessionStorage.setItem("item_currency", item1.item_currency);
	sessionStorage.setItem("item_currency_2", item2.item_currency);
	sessionStorage.setItem("item_currency_3", item3.item_currency);
}


//Function open cart. Get all values and display all info.. If item value is not zero, display in shopping cart.

function openCart(){
		
	if (document.getElementById("quantity").value == 0){
			document.getElementById("cart1").style.display = "none";
			document.getElementById("userInfo").style.display = "none";
			//document.getElementById("emptyCartText").style.display = "block";
			document.getElementById("submitButton").style.display = "none";
		} else if (document.getElementById("quantity").value != 0){
			document.getElementById("cart1").style.display = "block";
		}
	
	if (document.getElementById("quantity2").value == 0){
			document.getElementById("cart2").style.display = "none";
			document.getElementById("userInfo").style.display = "none";
			//document.getElementById("emptyCartText").style.display = "block";
			document.getElementById("submitButton").style.display = "none";
		} else if (document.getElementById("quantity2").value != 0){
			document.getElementById("cart2").style.display = "block";
	}
	
	if (document.getElementById("quantity3").value == 0){
			document.getElementById("cart3").style.display = "none";
			document.getElementById("userInfo").style.display = "none";
			//document.getElementById("emptyCartText").style.display = "block";
			document.getElementById("submitButton").style.display = "none";
		} else if (document.getElementById("quantity3").value != 0){
			document.getElementById("cart3").style.display = "block";
	}
	
	//If all baskets are empty, do not open cart. 
	
	if (document.getElementById("quantity").value != 0 || document.getElementById("quantity2").value != 0 || document.getElementById("quantity3").value != 0){
		//document.getElementById("emptyCartText").style.display = "none";
		document.getElementById("userInfo").style.display = "block";
		document.getElementById("submitButton").style.display = "block";		
	} 
	
	//Open cart
	
	if (document.getElementById("quantity").value != 0 || document.getElementById("quantity2").value != 0 || document.getElementById("quantity3").value != 0){
	
		document.getElementById("goToCart").style.display = "block";
		
		document.getElementById("cart-item").innerHTML = item1.item_name;
		document.getElementById("cart-quantity").innerHTML = "x" + document.getElementById("quantity").value;
		document.getElementById("cart-currency").innerHTML = item1.item_currency + " " + Math.round(item1.item_cost * document.getElementById("quantity").value *100) / 100;
		
		document.getElementById("cart-item-2").innerHTML = item2.item_name;
		document.getElementById("cart-quantity-2").innerHTML = "x" + document.getElementById("quantity2").value;
		document.getElementById("cart-currency-2").innerHTML = item2.item_currency + " " + Math.round(item2.item_cost * document.getElementById("quantity2").value*100) / 100;
		
		document.getElementById("cart-item-3").innerHTML = item3.item_name;
		document.getElementById("cart-quantity-3").innerHTML = "x" + document.getElementById("quantity3").value;
		document.getElementById("cart-currency-3").innerHTML = item1.item_currency + " " + Math.round(item3.item_cost * document.getElementById("quantity3").value*100) / 100;
		
	}	
}


//Dynamically display card details
function cardNumber() {
  let cardNo = document.getElementById("cardnumber").value;
  document.getElementById("cardNumber").innerHTML = cardNo;
}

function cardHolder(){
	let cardHold = document.getElementById("cardholder").value;
  document.getElementById("cardPersonName").innerHTML = cardHold;
}
	
function confirmPurchase(){
	if (document.getElementById("cardholder").value == "" && document.getElementById("cardnumber").value == "" && document.getElementById("cardholder").value == "" && document.getElementById("cvvnumber").value == "" && document.getElementById("address1").value == "" && document.getElementById("address2").value == "" && document.getElementById("emailaddress").value == ""){
		alert("Please fill in all details")	
	} else if (document.getElementById("cardholder").value !== "" && document.getElementById("cardnumber").value !== "" && document.getElementById("cardholder").value !== "" && document.getElementById("cvvnumber").value !== "" && document.getElementById("address1").value !== "" && document.getElementById("address2").value !== "" && document.getElementById("emailaddress").value !== ""){

	document.getElementById("userInfo").style.display="none";
	document.getElementById("confirmationMessage").style.display="block";
	document.getElementById("cartSummary").style.display="none";
	document.getElementById("cardType").style.display="none";
	}
}
//END - Dynamically display card details

	
function closeCart(){
	document.getElementById("goToCart").style.display="none";
}
	
//}
