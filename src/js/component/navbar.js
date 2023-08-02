import React, { useContext } from "react";
import sw from "../../img/star-wars.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let arr = store.favorites.name;

	let loop = arr.map((value, index) => {
		return (
			<li key={index} className="dropdown-item">
				<Link
					className="text-decoration-none"
					to={`/${store.favorites.link[index][0]}/${store.favorites.link[index][2]}`}>
					{value}
				</Link>
				<i onClick={() => actions.removeFavorite(value)} className="fas fa-trash float-end mt-1"></i>
			</li>
		);
	});

	let num = arr.length;

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand">
						<img src={sw} width="100" height="60" />
					</span>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites <span className="badge bg-secondary">{num}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{num == 0 ? <li className="dropdown-item">empty</li> : loop}
					</ul>
				</div>
			</div>
		</nav>
	);
};