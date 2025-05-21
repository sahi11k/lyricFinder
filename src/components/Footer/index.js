import "./index.css";
import Linkedin from "./LinkedIn";
import Github from "./Github";
import Instagram from "./Instagram";
import Gmail from "./Gmail";

const LINKEDIN = "https://www.linkedin.com/in/sahi11k";
const INSTAGRAM = "https://instagram.com/sahi11k/ ";
const GITHUB = "https://github.com/sahi11k";
const GMAIL = "mailto:sahil511kumar@gmail.com";

const Icon = ({ children, link }) => {
  return (
    <div className="icon">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialWrapper">
        <div className="socialIcons">
          <Icon link={GMAIL}>
            <Gmail />
          </Icon>
          <Icon link={LINKEDIN}>
            <Linkedin />
          </Icon>
          <Icon link={GITHUB}>
            <Github />
          </Icon>
          <Icon link={INSTAGRAM}>
            <Instagram />
          </Icon>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
