import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import TempLeft from "../component/tempLeft";
import TempRight from "../component/TempRight";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="text-center mt-5">
			<TempLeft/>
			<TempRight/>
		</div>
		</>
	);
};
