import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.map((skills, i) => {
                        return (
                            <li className="software-skill-inline" name={skills.skillName}>
                                {skills.fontAwesomeClassname && (
                                    <span
                                        className="iconify"
                                        data-icon={skills.fontAwesomeClassname}
                                        style={skills.style}
                                        data-inline="false"
                                    ></span>
                                )}
                                {!skills.fontAwesomeClassname && skills.imageSrc && (
                                    <img
                                        className="skill-image"
                                        style={skills.style}
                                        src={`${process.env.PUBLIC_URL}/skills/${skills.imageSrc}`}
                                        alt={skills.skillName}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
