import React, {useState} from "react"


const App=()=>{
	let time =new Date().toLocaleTimeString()
	
	
	const [currvalue, updatevalue]=useState(time); 
	const Click=()=>{
		time =new Date().toLocaleTimeString() /*It need to fetch exact current time again*/
		updatevalue(time)
	} 

	setInterval(Click,1000)   /*method requires a callback and frequency;)*/
		

	return(
		<>
			<div className="maindiv">
				<h1>{currvalue}</h1>
				
			</div>



		</>)
}
export default App