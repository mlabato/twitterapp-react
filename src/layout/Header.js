import { useState } from "react";
import MobileNav from "../UI/MobileNav";
import { FaGithub} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {

  const [showBar, setShowBar] = useState(false)

  const showBarHandler = () => {
    setShowBar(!showBar)
  }

  return (
    <section className="bg-[#15202B]  border-b-[1px] border-[#38444D]  ">
      <article className="mx-[.5rem] notebook:mx-[12rem] flex flex-row h-[4rem] items-center justify-between ">
        <img src="/logo.png" className="hidden notebook:block my-2 notebook:my-4 h-[1.5rem] notebook:h-[2rem] ml-[1rem] notebook:ml-[3rem] " alt="" />

        <HiMenu className="text-[#1C94E5] text-[1.75rem] notebook:hidden" onClick={showBarHandler}/>
        <MobileNav classes={showBar ? " left-0 top-10" : "top-10 -left-[30rem]"}/>
        

        <div className="text-gray-500 flex flex-row items-center text-[0.7rem] notebook:text-[1rem]">
          {" "}
          Powered with{" "}
          <a
            href="https://developer.twitter.com/en/docs/twitter-api"
            className="font-bold text-[#1C94E5] text-[0.7rem] notebook:text-[1rem] mx-2"
            alt=""
          >
            Twitter API
          </a>{" "}
          by @mlabato{" "}
          <a
            href="https://github.com/mlabato"
            alt=""
            className="ml-2 text-2xl hover:text-[#1C94E5]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luismartinlab/"
            alt=""
            className="ml-2 text-2xl hover:text-[#1C94E5]"
          >
            <FaLinkedin />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Header;
