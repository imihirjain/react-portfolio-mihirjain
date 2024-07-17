import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="text-5xl font-semibold">MJ</h1>
        </div>
            
        <div className="flex items-center justify-center m-8 gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mihir-jain-583633213" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/imihirjain/">
            <FaInstagram/>
          </a>
          <a href="https://github.com/imihirjain" target="_blank">
            <FaGithub/>
          </a>
          <a href="https://x.com/imihirjain1815" target="_blank">
            <FaSquareXTwitter/>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
