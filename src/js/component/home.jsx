import React from "react";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex">
				<Card />
				<Card />
				<Card />
				<Card />	
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
