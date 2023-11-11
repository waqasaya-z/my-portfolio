import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import { BiLogoUpwork } from "react-icons/bi"
import { TbBrandFiverr } from "react-icons/tb"
import Link from "next/link"


const SocialContact = () => {
  return (
    <div className="mt-4">
        <div className="text-white font-semibold text-center">
            <h1 className="text-4xl text-white"> Contact </h1>
        </div>
        <div className="grid grid-cols-3 mt-24 gap-2 text-lg font-medium text-[#5d39a4] shadow-black stroke-black">
         <Link className="flex items-center justify-center gap-2"  href="https://www.linkedin.com/in/waqasayaz/"> <FaLinkedinIn />  <p> in/waqasayaz </p> </Link>
         <Link className="flex items-center justify-center gap-2" href="https://github.com/waqasaya-z"> <FaGithub /> <p> github.com/waqasaya-z </p> </Link>
         <Link className="flex items-center justify-center gap-2" href="https://twitter.com/waqaswhat"> <FaTwitter />  <p> @waqaswhat </p></Link>
         <Link className="flex items-center justify-center gap-2" href="https://www.instagram.com/waqas_ayaz/"> <FaInstagram />  <p> instagram.com/waqas_ayaz </p></Link>
         <Link className="flex items-center justify-center gap-2" href="https://www.upwork.com/freelancers/~01d95726adf56c0272">  <BiLogoUpwork />  <p> Waqas A. </p></Link>
         <Link className="flex items-center justify-center gap-2" href="https://www.fiverr.com/waqas_ayaz"> <TbBrandFiverr />  <p>fiverr.com/waqas_ayaz</p></Link>
         <Link className="flex items-center justify-center gap-2" href="https://www.facebook.com/waqas.ayaz01/"> <FaFacebook /> <p> facebook.com/waqas.ayaz01 </p> </Link>
         <Link className="flex items-center justify-center gap-2" href="https://codepen.io/waqasaya-z">  <FaCodepen /> <p> codepen.io/waqasaya-z </p> </Link>
        </div>
    </div>
  )
}

export default SocialContact