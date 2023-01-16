import React from "react";
import iconMoon from "../Assets/icon-moon.svg";
import iconSun from "../Assets/icon-sun.svg";

const Header = ({ lightMode, setLightMode }) => {
	const handleMode = () => {
		setLightMode((prev) => !prev);
	};
	return (
		<header>
			<h1>TODO</h1>
			{lightMode ? (
				<img src={iconMoon} alt="" onClick={handleMode} />
			) : (
				<img src={iconSun} alt="" onClick={handleMode} />
			)}
		</header>
	);
};

export default Header;
