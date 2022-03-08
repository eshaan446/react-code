import React, {useState}from "react"
const App=()=>{
	const[currtext,updatetext]=useState(0)

	const Inc=()=>{
		updatetext(currtext+1)
	}
	const Dec=()=>{
		if (currtext==-currtext) {
		updatetext(0)
		alert("0 reached")
	}
	else{
		updatetext(currtext-1)
	}
	}
	return(
		<>
			<div className="box">
				<h1 className="text">{currtext}</h1>
				<button onClick={Inc}className="inc">Inc</button>
				<button onClick={Dec} className="dec">Dec</button>
				
			</div>
		</>
		)
	
}
export default App