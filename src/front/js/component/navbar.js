import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (

		<>

			<nav className="navbar navbar-expand-lg fondo">
				<div className="container-fluid">
					

							<Link className="navbar-brand text-secondary fw-bold" to="/">HUMANCARE</Link>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className=" d-flex flex-row-reverse" >
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link className="nav-link text-secondary" to="/">Home</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-secondary" to="/About">About Us</Link>
									</li>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle text-secondary" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Account
										</Link>
										<ul className="dropdown-menu fondo">
											<li><Link className="dropdown-item text-secondary" to="#">Sing In</Link></li>
											<li><Link className="dropdown-item text-secondary" to="#">Log In</Link></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
			</nav>

		</>

	);
};
