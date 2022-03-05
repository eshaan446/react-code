import React, {useState}from "react"
const App=()=>{

	const [currtext,updatetext]=useState("Hello")

	const/*Click*/Submit=(event)=>{  //as function submit return an object we can excess it by any keyword
		event.preventDefault()  //this method prevents from submitting a form or its default behaviour as forms are loaded on diff page
		let inp1= document.getElementById("inp").value
		let inp2= document.getElementById("inp2").value
		updatetext("Hello "+inp1+" "+inp2)
	}

	return(
		<>
			<form onSubmit={Submit}>  {/*we could use it without the form*/}
				<div className="container" style={{backgroundColor:"purple"}}>
					<h1>{currtext}</h1>
					<input id="inp" type="text" placeholder="Enter your name"/>
					<input id="inp2" type="password" placeholder="Enter your password"/>    
					<button type ="submit" /*onClick={Click}*/>SUBMIT</button>
				</div>
			</form>
		
		</>
		)
}
export default App