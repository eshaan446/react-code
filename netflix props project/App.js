import React from "react"
import Card from "./Card"
import Cdata from "./Cdata"
const App=()=>{
	return(
		<>
			<h1 className="heading">List of Top Three Netflix Series</h1>
			<Card imgsrc={Cdata[0].imgsrc} imgtitle={Cdata[0].imgtitle} alink={Cdata[0].alink}/>
			<Card imgsrc={Cdata[1].imgsrc} imgtitle={Cdata[1].imgtitle} alink={Cdata[1].alink}/>
			<Card imgsrc={Cdata[2].imgsrc} imgtitle={Cdata[2].imgtitle} alink={Cdata[2].alink}/>   
			
		</>
		)
}
	
export default App