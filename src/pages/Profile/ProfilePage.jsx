import "./ProfilePage.styles.css";
import profileImage from "../../assets/profile-picture.jpeg";

export default function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile__header">
          <p>Luis Munoz Diaz</p>
          <span className="material-icons profile__icon">light_mode</span>
        </header>
        <section className="profile__hero">
          <h1 className="profile__greeting">
            Hey, <br /> I'm Luis.
          </h1>
          <h2 className="profile__bio">
            I'm a <b>creative</b> and <b>people-oriented</b> web developer who
            loves using <b>JavaScript</b> technologies.
          </h2>
        </section>
        <footer className="profile__footer">
          <div className="profile__noname">
            <img src={profileImage} className="profile__portrait" />
            <p className="profile__location">Based in Chicago, US.</p>
          </div>
          <div className="profile__socials">
            <a href="https://github.com/louismunozdiaz" target={"_blank"}>
              <i className="fa fa fa-github fa-lg profile__social"></i>
            </a>
            <a href="https://twitter.com/louismdiaz" target={"_blank"}>
              <i className="fa fa-twitter fa-lg profile__social"></i>
            </a>
            <a
              href="https://www.instagram.com/louismunozdiaz/"
              target={"_blank"}
            >
              <i className="fa fa-instagram fa-lg profile__social"></i>
            </a>
            <a href="">
              <i className="fa fa-facebook-official fa-lg profile__social"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/louismunozdiaz/"
              target={"_blank"}
            >
              <i className="fa fa-linkedin-square fa-lg profile__social"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
