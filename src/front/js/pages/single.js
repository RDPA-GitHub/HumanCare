import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Sidebar from "../component/sidebar";
import '../../styles/sidebar.css'

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<div className="nav">
				<Sidebar />
			</div>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
