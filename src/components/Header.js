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
				<img
					src={iconMoon}
					alt="dark mode moon icon"
					aria-label="switch to dark mode"
					title="switch to dark mode"
					onClick={handleMode}
					style={{ cursor: "pointer" }}
				/>
			) : (
				<img
					src={iconSun}
					alt="light mode sun icon"
					aria-label="switch to light mode"
					title="switch to light mode"
					onClick={handleMode}
					style={{ cursor: "pointer" }}
				/>
			)}
		</header>
	);
};

export default Header;
