import React, { useState } from "react";
import iconMoon from "../Assets/icon-moon.svg";
import iconSun from "../Assets/icon-sun.svg";

const Header = () => {
	const [lightMode, setLightMode] = useState(true);
	const handleMode = () => {
		setLightMode((prev) => !prev);
	};
	return (
		<header>
			<h1>TODO</h1>
			{lightMode ? (
				<img src={iconSun} alt="" onClick={handleMode} />
			) : (
				<img src={iconMoon} alt="" onClick={handleMode} />
			)}
		</header>
	);
};

export default Header;
