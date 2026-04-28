import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "../../contexts/LanguageContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {messages, locale} = useTranslation();
  
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">
                {locale === "es" ? "Experiencia" : "Experiences"}
              </h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  const jobKey = `job${i + 1}`;
                  const translatedJob = messages.workExperience[jobKey];
                  
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: translatedJob ? translatedJob.company : card.company,
                        desc: translatedJob ? translatedJob.desc : card.desc,
                        date: translatedJob ? translatedJob.date : card.date,
                        companylogo: card.companylogo,
                        role: translatedJob ? translatedJob.role : card.role,
                        descBullets: translatedJob ? [
                          translatedJob.bullet1,
                          translatedJob.bullet2,
                          translatedJob.bullet3,
                          translatedJob.bullet4
                        ].filter(Boolean) : card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
