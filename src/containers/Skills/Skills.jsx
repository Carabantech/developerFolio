"use client";

import React, {useContext} from "react";
import styles from "./Skills.module.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Image from "next/image";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "../../contexts/LanguageContext";

export default function Skills() {
  const styleContext = useContext(StyleContext);
  const isDark = styleContext ? styleContext.isDark : false;
  const {messages} = useTranslation();
  
  if (!skillsSection.display) {
    return null;
  }
  
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className={styles.skillsMainDiv}>
        <Fade direction="left" duration={1000}>
          <div className={styles.skillsImageDiv}>
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <Image
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade direction="right" duration={1000}>
          <div className={styles.skillsTextDiv}>
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {messages.skills.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {messages.skills.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                {messages.skills.skill1}
              </p>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                {messages.skills.skill2}
              </p>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                {messages.skills.skill3}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
