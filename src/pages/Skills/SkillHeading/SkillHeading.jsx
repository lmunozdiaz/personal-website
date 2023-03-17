import "./SkillHeading.styles.css";

export default function Header(props) {
  return (
    <header className="header-container">
      <h2 className="heading">{props.heading}</h2>
      <p className="subheading">{props.subheading}</p>
    </header>
  );
}
