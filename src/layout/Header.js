import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="bg-[#15202B]  border-b-[1px] border-[#38444D]  ">
      <article className="mx-[12rem] flex flex-row h-[4rem] items-center justify-between ">
        <img src="/logo.png" className="my-4 h-[2rem] ml-[3rem] " alt="" />

        <div className="text-gray-500 flex flex-row items-center">
          {" "}
          Powered with{" "}
          <a
            href="https://developer.twitter.com/en/docs/twitter-api"
            className="font-bold text-[#1C94E5] mx-2"
            alt=""
          >
            Twitter API
          </a>{" "}
          by @mlabato{" "}
          <a
            href="https://www.linkedin.com/in/luismartinlab/"
            alt=""
            className="ml-2 text-2xl hover:text-[#1C94E5]"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/mlabato"
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
