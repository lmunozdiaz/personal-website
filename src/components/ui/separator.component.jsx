import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Styles from "./separator.styles";

export default function SeparatorComponent() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Styles.Separator data-aos="fade-up" />;
}
