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
			<div className="d-flex justify-content-center">
				<Card className="mx-5" />
				<Card className="mx-5"/>
				<Card className="mx-5"/>
				<Card className="mx-5"/>	
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
