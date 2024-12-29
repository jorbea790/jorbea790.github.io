import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="fidelity_investments.jpeg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Fidelity Investments</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jul 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="fidelity_investments.jpeg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Fidelity Investments</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">Jan 2023 - Jul 2024</div>
						</div>

						<div className="work">
							<img
								src="fidelity_investments.jpeg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Fidelity Investments</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Jun 2022 - Dec 2022</div>
						</div>

						<div className="work">
							<img
								src="unc_chapel_hill.jpeg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">UNC Chapel Hill</div>
							<div className="work-subtitle">
								Data Warehouse Technician
							</div>
							<div className="work-duration">Feb 2022 - May 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
