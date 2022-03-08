import React, {useState}from "react"
const App=()=>{

	const [currtext,updatetext]=useState("Welcome")
	const [curremail,updateemail]=useState("")
	const [currnum,updatenum]=useState("")

	const/*Click*/Submit=(event)=>{  //as function submit return an object we can excess it by any keyword
		event.preventDefault()  //this method prevents from submitting a form or its default behaviour as forms are loaded on diff page
		let inp1= document.getElementById("inp").value
		let inp2= document.getElementById("inp2").value
		updatetext("Hello "+inp1+" "+inp2)
		updateemail(document.getElementById("inp3").value)
		updatenum(document.getElementById("inp4").value)
		
	}

	return(
		<>
			<div className="container" style={{backgroundColor:"purple"}}>
				<form onSubmit={Submit}>  
				
					<h1>{currtext}</h1>
					<h3>{curremail}</h3>
					<h4>{currnum}</h4>

					<input id="inp" className="inp" type="text" placeholder="Enter your name"/>
					<input id="inp2" className="inp" type="password" placeholder="Enter your password"/> 
					<input id="inp3" className="inp" type="email" placeholder="Enter your email"/>
					<input id="inp4" className="inp" type="number" placeholder="Enter your mobile number"/>   
					<button type ="submit" /*onClick={Click}*/>SUBMIT</button>
				</form>
			</div>
		
		</>
		)
}
export default App