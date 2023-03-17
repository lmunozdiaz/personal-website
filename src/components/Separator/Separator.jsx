import "./Separator.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Separator() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <span className="separator" data-aos="fade-up"></span>;
}
