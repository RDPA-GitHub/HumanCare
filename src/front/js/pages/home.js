import React, { useContext } from "react";
import { Context } from "../store/appContext";
import TempLeft from "../component/home/TempLeft";
import TempRight from "../component/home/TempRight";
import Corousel from "../component/home/Corousel";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="text-center mt-5 ">
			<TempLeft/>
			<TempRight/>
			<Corousel/>
		</div>
		</>
	);
};
