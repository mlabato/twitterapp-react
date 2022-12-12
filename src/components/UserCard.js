import React, { useContext } from "react";
import UserContext from "../store/user-context";

import { FaSearch } from "react-icons/fa";
import UserSearchForm from "../UI/UserSearchForm";
import FaqsCard from "../components/FaqsCard";

const UserCard = () => {
  const userCtx = useContext(UserContext);
  const twitterAccountUrl = "www.twitter.com/" + userCtx.user.username;

  const userFollowers = new Intl.NumberFormat("de-DE", {
    maximumSignificantDigits: 5,
  }).format(userCtx.user.public_metrics.followers_count);
  const usersFollowing = new Intl.NumberFormat("de-DE", {
    maximumSignificantDigits: 3,
  }).format(userCtx.user.public_metrics.following_count);

  return (
    <section className=" p-4 h-full  mx-[2rem] notebook:w-4/5  flex flex-col justify-center notebook:justify-start ">
      <UserSearchForm
        formClasses={"relative group"}
        inputClasses={
          "p-2 bg-[#273340] rounded-3xl w-full focus:bg-[#15202B]  focus:border-[1px]  focus:border-[#1C94E5]"
        }
        buttonClasses={" absolute top-3 right-6"}
        buttonText={
          <FaSearch className="group-focus:text-[#1C94E5] text-[#8B98A5]" />
        }
        className=" "
      />

      <article className="flex flex-col      bg-[#273340] rounded-3xl p-4  mt-[4rem] relative ">
        <img
          className=" w-1/5 rounded-full absolute -top-7  border-[#273340] border-4 "
          src={userCtx.user.profile_image_url}
          alt=""
        />
        <div className="flex justify-items-start mt-8">
          <a href={twitterAccountUrl} className="ml-1.5  hover:text-[#1C94E5] ">
            <span className=" font-bold block text-xl text-white">
              {userCtx.user.name}
            </span>
            <span className="font-bold block text-sm text-gray-600">
              @{userCtx.user.username}
            </span>
          </a>
        </div>

        <div className="p-2 text-sm text-white">{userCtx.user.description}</div>

        <div className="flex flex-row text-white p-2 items-center text-sm">
          <span className="font-bold">{usersFollowing}</span>{" "}
          <span className="mx-1 ">followers</span>
          <span className="font-bold">{userFollowers}</span>{" "}
          <span className="mx-1 ">following</span>
        </div>
      </article>

      <FaqsCard />
    </section>
  );
};

export default UserCard;
