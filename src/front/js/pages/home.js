import React, { useContext } from "react";
import { Context } from "../store/appContext";
import BgHumanCare from "../../img/Fondo-HumanCare.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
				<img src={BgHumanCare} className="opacity-50" />
		</div>
	);
};
