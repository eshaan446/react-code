import React from 'react'

const Card=(props)=>{
	return(
		<>
			<div className="card">
				<div className="cards">
					<img src={props.imgsrc}
					alt="Peaky-Blinders"/>
					<div className="card__info">
						<span className="card__span">A Netflix Original series</span>
						<h3 className="card__title">{props.imgtitle}</h3>
						<a href={props.alink} target="_blank">
							<button>Watch Now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
export default Card