import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, cloudSkillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function CloudSkills() {
    const { isDark } = useContext(StyleContext);
    if (!cloudSkillsSection.display) {
        return null;
    }
    return (
        <div className={isDark ? "dark-mode main" : "main"} id="skills">
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={codingPerson} />
                        ) : (
                            <img
                                alt="Man Working"
                                src={require("../../assets/images/developerActivity.svg")}
                            ></img>
                        )}
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1
                            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                        >
                            {cloudSkillsSection.title}{" "}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle skills-text-subtitle"
                                    : "subTitle skills-text-subtitle"
                            }
                        >
                            {cloudSkillsSection.subTitle}
                        </p>
                        <SoftwareSkill softwareSkills={cloudSkillsSection.softwareSkills} />
                        <div>
                            {cloudSkillsSection.skills.map((skills, i) => {
                                return (
                                    <p
                                        key={i}
                                        className={
                                            isDark
                                                ? "dark-mode subTitle skills-text"
                                                : "subTitle skills-text"
                                        }
                                    >
                                        {skills}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
