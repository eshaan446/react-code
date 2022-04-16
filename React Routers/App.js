import React from "react"
import "../index.css"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App=()=>{
	return(
		<>
			<BrowserRouter>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					  <div className="container-fluid">
					    <Link className="navbar-brand" to="/">Navbar</Link>
					    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarSupportedContent">
					      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
					        <li className="nav-item">
					          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/about">About</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/contact">Contact</Link>
					        </li>
					      </ul>
					      <form className="d-flex">
					        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					        <button className="btn btn-outline-success" type="submit">Search</button>
					      </form>
					    </div>
					  </div>
					</nav>
				<Routes>
					<Route path="/about" element={<About/>}/>
					<Route exact path="/" element={<Home/>} />
               	 	<Route path="/contact" element={<Contact/>} />
				</Routes>
			</BrowserRouter>
		</>

		)
}
export default App
