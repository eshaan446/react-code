import React, {useState} from "react"


const App=()=>{
	//const state=useState();
	//console.log(usestate)//IN clog we get [undefined,func]
	const [num, update]=useState(1);  {/*Object Destructuring used const[currvalue,updatedfunc]=useState(initialvalue)*/}
									  {/*InitialValue comes to currvalue*/}

	const Click=()=>{
		update(num+1)
		
	}
	return(
		<>
			<div className="maindiv">
				<h1>{num}</h1>
				<button onClick={Click}>Click Me</button>
			</div>



		</>)
}
export default App