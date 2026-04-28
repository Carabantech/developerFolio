import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "../../contexts/LanguageContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const {messages} = useTranslation();
  
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {messages.achievements.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {messages.achievements.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              const certKey = `cert${i + 1}`;
              const translatedCert = messages.achievements[certKey];
              
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: translatedCert ? translatedCert.title : card.title,
                    description: translatedCert ? translatedCert.subtitle : card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink.map(link => ({
                      ...link,
                      name: translatedCert ? translatedCert.linkText : link.name
                    }))
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
