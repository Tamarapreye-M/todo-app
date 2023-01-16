import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

/* 
light mode 
background image
main background color
display background colors
text colors

*/

const App = () => {
	const [lightMode, setLightMode] = useState(false);
	return (
		<div className={`parent-container ${lightMode && "light"}`}>
			<div className="child-container">
				<Header lightMode={lightMode} setLightMode={setLightMode} />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default App;
