import React, {useState}from "react"
const App=()=>{
	//const background="yellow"
	const [currbg,updatebg]=useState("yellow")
	const[currtext,updatetext]=useState("Enter for Green")
	const Changebg=()=>{
		
		updatebg("green")
		updatetext("Exit for Red")

	}
	const Mouseout=()=>{
		updatebg("red")
		updatetext("Enter for Green again")
	}
	return(
		<>
			
			<div style={{backgroundColor:currbg}}>  
				<button onMouseEnter={Changebg} onMouseOut={Mouseout}>{currtext}</button>
			</div>
		
		</>
		)
}
export default App