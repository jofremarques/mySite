import { useEffect, useState } from "react";
import { AboutUs } from "src/components/AboutUs";
import { Appresentation } from "src/components/Appresentation";
import { Skills } from "src/components/Skills";
import ButtonTop from "src/components/shared/GoToTop";
import { SocialBar } from "src/components/shared/SocialBar";

export default function Index() {
  const [show, setShow] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    };

    const handleScrollSocialVisibility = () => {
      window.scrollY > 2300 ? setShowSocial(true) : setShowSocial(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);
    window.addEventListener("scroll", handleScrollSocialVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
      window.addEventListener("scroll", handleScrollSocialVisibility);
    };
  }, []);

  return (
    <>
      <ButtonTop showButton={show} />
      <SocialBar showSocial={showSocial} />
      <Appresentation />
      <AboutUs />
      <Skills />
    </>
  );
}
