import React from "react"
import "../index.css"
import Frazor from "../frazor.png"
let name;
let email;
let number;
let address;
let itemname;let itemprice;let itemquantity;let subtotal=0;
const Inputname=()=>{
	document.getElementById("name").addEventListener("keyup",()=>{
		name=document.getElementById("name").value;
		document.getElementById("namespan").innerHTML=name;
	})
}
const Inputemail=()=>{
	document.getElementById("email").addEventListener("keyup",()=>{
		email=document.getElementById("email").value;
		document.getElementById("emailspan").innerHTML=email;
	})
}
const InputNumber=()=>{
	document.getElementById("number").addEventListener("keyup",()=>{
		number=document.getElementById("number").value;
		document.getElementById("numberspan").innerHTML=number;
	})
}
const Address=()=>{
	document.getElementById("address").addEventListener("keyup",()=>{
		address=document.getElementById("address").value;
		document.getElementById("addressspan").innerHTML=address;
	})
}
const Reset=()=>{
	window.location.reload();
}
const Print=()=>{
	let fieldcontent=document.querySelector(".field3").innerHTML;
	document.body.innerHTML=fieldcontent;
	window.print();
	window.location.reload();
}
const AddItems=()=>{
	itemname=document.sample.itemname.value;
	itemprice=document.sample.itemprice.value;
	itemquantity=document.sample.itemquantity.value;
	let itemamount=itemprice*itemquantity;
	let tr=document.createElement('tr');
	let td1=tr.appendChild(document.createElement('td'));
	let td2=tr.appendChild(document.createElement('td'));
	let td3=tr.appendChild(document.createElement('td'));
	let td4=tr.appendChild(document.createElement('td'));
	td1.innerHTML=itemname;
	td2.innerHTML=itemprice+"$";
	td3.innerHTML=itemquantity;
	td4.innerHTML=itemamount;
	document.getElementById("tbl").appendChild(tr);
	document.getElementById("itemname").value="";
	document.getElementById("itemprice").value="";
	document.getElementById("itemquantity").value="";
	subtotal=subtotal+itemamount;
	document.getElementById("subtotal").innerHTML=subtotal+"$";
	let gst=(subtotal*18)/100;
	document.getElementById("gst").innerHTML=gst+" $"
	document.getElementById("totamount").innerHTML=subtotal+gst+" $";
}
const App=()=>{
	return(
		<>
			<div className="body">
				<div className="semidiv">
					<div className="container">
						<div className="part-1">
							<fieldset className="field1">
								<legend><i>Personal Information</i></legend>
								<b>Client's Name</b>: <input type="text" name="" id="name" onChange={Inputname} required/><br/><br/>
								<b>Client's Email</b>: <input type="email" name="" id="email" onChange={Inputemail} required/><br/><br/>
								<b>Phone Number</b>: <input type="number" name="" id="number" onChange={InputNumber} required/><br/><br/>
								<b>Client's Address</b>: <input type="text" name="" id="address" onChange={Address}required/><br/><br/>
							</fieldset>
						</div>
						<div className="part-2">
							<fieldset className="field2">
								<legend><i>Order List</i></legend>
								<form method="POST" name="sample">
									<br/>
									<b>Item : </b> <input type="text" name="itemname"id="itemname"/><br/><b>Price  [ $ ] :</b> <input type="number" name="itemprice" id="itemprice"/><br/><b>Quantity :</b> <input type="number" name="itemquantity" id="itemquantity"/><br/><br/>
									<input id="additems" type="button" name="add" value="Add Item" onClick={AddItems}/>
								</form>	
								<div className="buttons">
								<button id="reset" onClick={Reset}>RESET</button>
								<button id="print" onClick={Print}>PRINT</button>
								</div>
							</fieldset>
						</div>

					</div>
					<div className="container">
						<fieldset className="field3">
						<div id="header">
							<img id="frazorh" src={Frazor}/>
						</div>
						<legend><i><b>INVOICE</b></i></legend>
						<h4>Bill Receipient: <span id="namespan"></span></h4>
						<h4>Email: <span id="emailspan"></span></h4>
						<h4>Phone Number: <span id="numberspan"></span></h4>
						<h4>Address: <span id="addressspan"></span></h4>
						<table id="tbl" border="1" class="table">
						<thead>
							<tr><th>Item</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>
						</thead>
						<tbody id="billstatement">
						</tbody>
						</table>
						<hr/>
						<div className="amount">
							<h5>Subtotal :  <span id="subtotal"></span></h5>
							<h5>GST @18% :  <span id="gst"></span></h5><hr/>
							<h2>Total Amount Due : <span id="totamount"></span></h2><hr/>
						</div>
						<div className="footer">
							<h4>❤️ Thank you!</h4>
							<h5 id="frazor"><i>Frazor Enterprise Solutions Pvt Ltd</i></h5>
							<img id="frazorimg"src={Frazor}/><br/><br/>
						</div>
						<div id="firstspan"></div>	
							
						</fieldset>

					</div>
				</div>
			</div>
		</>
		)
	
}
export default App