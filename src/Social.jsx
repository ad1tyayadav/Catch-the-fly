import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <header className='absolute flex w-[80%] text-2xl justify-around sm:w-[20%] top-8 right-8 sm:justify-around'>
        <a
          className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
          href="https://x.com/_its_Adi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
          href="https://github.com/ad1tyayadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
          href="https://www.linkedin.com/in/aditya-yadav-39b20529a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </header>
  )
}

export default Social;