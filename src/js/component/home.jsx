import React, { useState } from "react";
const Home = () => {
	const [selected, setSelected] = useState("");
	const handleColor = (color) => {
		if (color === selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	};

	return (
		<>
			<div className="top"></div>
			<div className="container">
				<div
					className={
						selected !== "red"
							? "red light opacity"
							: "red light selected"
					}
					onClick={() => handleColor("red")}></div>
				<div
					className={
						selected !== "yellow"
							? "yellow light opacity"
							: "yellow light selected"
					}
					onClick={() => handleColor("yellow")}></div>
				<div
					className={
						selected !== "green"
							? "green light opacity"
							: "green light selected"
					}
					onClick={() => handleColor("green")}></div>
			</div>
		</>
	);
};

export default Home;
