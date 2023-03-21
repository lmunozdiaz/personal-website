import profileImage from "../../assets/profile-picture.jpeg";
import Styles from "./profile.styles";

export default function ProfileComponent() {
  return (
    <Styles.MyProfile>
      <Styles.Header>
        <p>Luis Munoz Diaz</p>
        <span className="material-icons profile__icon">light_mode</span>
      </Styles.Header>
      <section>
        <Styles.Greeting>
          Hey, <br /> I'm Luis.
        </Styles.Greeting>
        <Styles.Bio>
          I'm a <Styles.Bold>creative</Styles.Bold> and{" "}
          <Styles.Bold>people-oriented</Styles.Bold> web developer who loves
          using <Styles.Bold>JavaScript</Styles.Bold> technologies.
        </Styles.Bio>
      </section>
      <Styles.Footer>
        <Styles.MoreDetails>
          <Styles.Portrait src={profileImage} />
          <Styles.Location>Based in Chicago, US.</Styles.Location>
        </Styles.MoreDetails>
        <Styles.Socials>
          <a href="https://github.com/louismunozdiaz" target={"_blank"}>
            <Styles.Social className="fa fa fa-github fa-lg"></Styles.Social>
          </a>
          <a href="https://twitter.com/louismdiaz" target={"_blank"}>
            <Styles.Social className="fa fa-twitter fa-lg"></Styles.Social>
          </a>
          <a href="https://www.instagram.com/louismunozdiaz/" target={"_blank"}>
            <Styles.Social className="fa fa-instagram fa-lg"></Styles.Social>
          </a>
          <a href="">
            <Styles.Social className="fa fa-facebook-official fa-lg"></Styles.Social>
          </a>
          <a
            href="https://www.linkedin.com/in/louismunozdiaz/"
            target={"_blank"}
          >
            <Styles.Social className="fa fa-linkedin-square fa-lg"></Styles.Social>
          </a>
        </Styles.Socials>
      </Styles.Footer>
    </Styles.MyProfile>
  );
}
