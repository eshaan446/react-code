import React from "react"


const SlotM=(props)=>{
	let x=props.x
	let y=props.y
	let z=props.z

	if((x==y)&&(y==z)){
		return(
			<>
				<h2> {x} {y} {z} </h2>
				<h2>This is Matching</h2>
				<hr></hr>
			</>

			)
	}
	else{
		return(
			<>
				<h2> {x} {y} {z} </h2>
				<h2>This is Not Matching</h2>
				<hr></hr>
			</>
			)
	}

}




const App=()=>{
	return(
		<>
			<h1 className='heading'>🎰 Welcome to Slot Machine Game 🎰</h1>
			<hr></hr>
			<div className="mainbox">
				<SlotM x="😊" y="😋" z="😌"/>
				<SlotM x="😊" y="😊" z="😊"/>
				<SlotM x="😋" y="😋" z="😋"/>
				<SlotM x="🍓" y="🍓" z="😋"/>

			</div>
			

		</>
		)
	
}

export default App