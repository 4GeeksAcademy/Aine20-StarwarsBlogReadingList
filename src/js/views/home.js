import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container testimonial-group mt-4">
			<div className="row">
				<div className="col">
					<h1 className="text-danger">Characters</h1>
				</div>
			</div>
			<div className="row mt-3 characters">
				{store.characters.map((value, index) => {
					return <Card key={index} id={index} character={value} selector="character" />;
				})}
			</div>
			<div className="row mt-5">
				<div className="col">
					<h1 className="text-danger">Planets</h1>
				</div>
			</div>
			<div className="row mt-3 planets">
				{store.planets.map((value, index) => {
					return <Card key={index} id={index} planet={value} selector="planet" />;
				})}
			</div>
		</div>
	);
};