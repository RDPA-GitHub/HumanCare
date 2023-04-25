import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Video from "../component/about-us/Video";
import Testimonials from "../component/about-us/Testimonials";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<Video/>
			<Testimonials/>
			<br />
			<Link to="/">
			</Link>
		</div>
	);
};
