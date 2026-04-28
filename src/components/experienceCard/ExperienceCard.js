import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    try {
      // Dynamically import colorthief only in browser
      if (typeof window !== "undefined" && imgRef.current && imgRef.current.complete) {
        import("colorthief").then((ColorThiefModule) => {
          try {
            // Try different ways to instantiate ColorThief
            let ColorThiefClass = ColorThiefModule.default || ColorThiefModule;
            
            // If it's not a constructor, try accessing it differently
            if (typeof ColorThiefClass !== 'function') {
              ColorThiefClass = ColorThiefModule;
            }
            
            const colorThief = new ColorThiefClass();
            const colors = colorThief.getColor(imgRef.current);
            setColorArrays(colors);
          } catch (err) {
            // Silently fail and use default color
            console.debug("ColorThief extraction skipped");
            setColorArrays([0, 116, 217]); // Default blue color
          }
        }).catch(err => {
          // Use default color on import error
          setColorArrays([0, 116, 217]); // Default blue color
        });
      }
    } catch (error) {
      // Use default color on any error
      setColorArrays([0, 116, 217]); // Default blue color
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
