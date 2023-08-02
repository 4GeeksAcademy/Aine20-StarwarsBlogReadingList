import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src="https://via.placeholder.com/800x600" width="auto" height="400" />
				</div>
				<div className="col-md-6">
					<div className="card-body text-center">
						<h1 className="card-title">{store.planets.length == 10 && store.planets[params.id].name}</h1>
						<p className="card-text h5">
							Sed ut perspiciatis unde omnis iste natus error sit voliptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo iventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur
						</p>
					</div>
				</div>
			</div>
			<div className="border-top border-danger mt-4">
				<div className="row text-danger text-center h6">
					<div className="col">Name</div>
					<div className="col">Climate</div>
					<div className="col">Population</div>
					<div className="col">Orbital Period</div>
					<div className="col">Rotation Period</div>
					<div className="col">Diameter</div>
				</div>
				<div className="row text-danger text-center">
					{store.characters.length == 10 && (
						<>
							<div className="col">{store.planets[params.id].name}</div>
							<div className="col">{store.planets[params.id].climate}</div>
							<div className="col">{store.planets[params.id].population}</div>
							<div className="col">{store.planets[params.id].rotation_period}</div>
							<div className="col">{store.planets[params.id].orbital_period}</div>
							<div className="col">{store.planets[params.id].diameter}</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};