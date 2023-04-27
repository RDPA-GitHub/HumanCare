import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Video from "../component/about-us/Video";
import BackgroundImage from "../component/about-us/BackgroundImage";
import Testimonials from "../component/about-us/Testimonials";
import { Context } from "../store/appContext";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<Video/>
			<BackgroundImage/>
			<Testimonials/>
			<br />
			<Link to="/">
			</Link>
		</div>
	);
};
