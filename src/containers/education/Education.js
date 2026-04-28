import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {useTranslation} from "../../contexts/LanguageContext";

export default function Education() {
  const {messages, locale} = useTranslation();
  
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">
          {locale === "es" ? "Educación" : "Education"}
        </h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => {
            const schoolKey = `school${index + 1}`;
            const translatedSchool = messages.education[schoolKey];
            
            return (
              <EducationCard 
                key={index} 
                school={{
                  ...school,
                  schoolName: translatedSchool ? translatedSchool.schoolName : school.schoolName,
                  subHeader: translatedSchool ? translatedSchool.subHeader : school.subHeader,
                  duration: translatedSchool ? translatedSchool.duration : school.duration,
                  desc: translatedSchool ? translatedSchool.desc : school.desc,
                  descBullets: translatedSchool ? [
                    translatedSchool.bullet1,
                    translatedSchool.bullet2
                  ].filter(Boolean) : school.descBullets
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
