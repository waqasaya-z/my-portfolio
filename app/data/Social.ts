import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import { BiLogoUpwork } from "react-icons/bi"
import { TbBrandFiverr } from "react-icons/tb"
import { IconType } from "react-icons";

type SocialIcon = IconType;

const Socials: {href: string, Icon: SocialIcon, description: string}[] = [
    {
      href: "https://www.linkedin.com/in/waqasayaz/",
      Icon: FaLinkedinIn,
      description: "in/waqasayaz"
    },
    {
      href: "https://github.com/waqasaya-z",
      Icon: FaGithub,
      description: "github.com/waqasaya-z"
    },
    {
      href: "https://twitter.com/waqaswhat",
      Icon: FaTwitter,
      description: "@waqaswhat"
    },
    {
      href: "https://www.instagram.com/waqas_ayaz/",
      Icon: FaInstagram,
      description: "instagram.com/waqas_ayaz"
    },
    {
      href: "https://www.upwork.com/freelancers/~01d95726adf56c0272",
      Icon: BiLogoUpwork,
      description: "Waqas A."
    },
    {
      href: "https://www.fiverr.com/waqas_ayaz",
      Icon: TbBrandFiverr,
      description: "fiverr.com/waqas_ayaz"
    },
    {
      href: "https://www.facebook.com/waqas.ayaz01/",
      Icon: FaFacebook,
      description: "facebook.com/waqas.ayaz01"
    },
    {
      href: "https://codepen.io/waqasaya-z",
      Icon: FaCodepen,
      description: "codepen.io/waqasaya-z"
    }
  ];
  
  export default Socials;