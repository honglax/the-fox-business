import React from "react";
import { Container } from "react-bootstrap";
import DarkBox from "../StyledComponent/DarkBox";
import { SkillMeasure, PrimaryButton } from "../StyledComponent/style";
import BoxSection from "../StyledComponent/BoxSection";
import doBestEver from "../../../assets/why-choose-us-1.jpg";
import customerDesire from "../../../assets/why-choose-us-2.jpg";

export default function Skills({ isReversed }) {
  const skills = [
    {
      title: "Web Design",
      percent: 90
    },
    {
      title: "Wordpress Development",
      percent: 95
    },
    {
      title: "SEO & Online Marketing",
      percent: 80
    },
    {
      title: "Mobile Apps",
      percent: 85
    }
  ];

  const reasons = [
    {
      img: doBestEver,
      name: "We Think Different. We Do The Best Ever",
      description:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat."
    },
    {
      img: customerDesire,
      name: "We Do What The Customers Desires",
      description:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat."
    }
  ];

  return (
    <Container className={isReversed ? "flex-row-reverse" : ""}>
      <DarkBox
        title="Incredible Skills"
        grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Nulla vehicula nibh vel ante commodo feugiat."
        content="TheFox include design that can be used for any type of website: business, corporate, portfolio, blog, products, magazine, etc. Buy TheFox and join our awesome community, let’s make TheFox better together!"
        btnIcon="ti-user"
        btnContent="Meet our team"
      >
        <div className="skills-box">
          {skills.map(skill => (
            <SkillMeasure percent={skill.percent} key={skills.indexOf(skill)}>
              <div className="skill-title">{skill.title}</div>
              <div className="measure" />
            </SkillMeasure>
          ))}
        </div>
      </DarkBox>
      <div className="why-choose-us">
        <BoxSection
          alignment="left"
          title="Why Choose TheFox Business"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. "
        >
          <div className="reasons">
            {reasons.map(reason => (
              <div className="reason-item" key={reasons.indexOf(reason)}>
                <img
                  src={reason.img}
                  alt={reason.name}
                  className="reason-img"
                />
                <p className="name">{reason.name}</p>
                <p
                  className="reason-description"
                  dangerouslySetInnerHTML={{ __html: reason.description }}
                />
              </div>
            ))}
          </div>
          <PrimaryButton
            width={220}
            height={30}
            transform="capitalize"
            bgColor="transparent"
            color="#4889f3"
            fontSize={18}
            borderColor="transparent"
            notHover={true}
            className="reason-btn"
          >
            <span className="ti-star icon mr-2" />
            Learn more about us
          </PrimaryButton>
        </BoxSection>
      </div>
    </Container>
  );
}
