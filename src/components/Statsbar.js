import React, { useContext} from "react";
import UserContext from "../store/user-context";


import { FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import StatsCard from "../UI/Statscard"

const Statsbar = () => {
  const userCtx = useContext(UserContext);

  const totalTweets =
    userCtx?.user?.public_metrics !== undefined
      ? new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 5,
        }).format(userCtx?.user?.public_metrics.tweet_count)
      : "";

  const totalRetweets =
    userCtx?.user?.public_metrics !== undefined
      ? new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 5,
        }).format(userCtx?.stats?.totalRetweets)
      : "";

  const totalFavs =
    userCtx?.user?.public_metrics !== undefined
      ? new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 5,
        }).format(userCtx?.stats?.totalFavs)
      : "";

  return (
    <article className="flex flex-col my-[1rem] notebook:my-[2rem]">
      <StatsCard
        stat={totalTweets}
        comment={"w/o RT & replies"}
        icon={<FaTwitter className="text-xl mx-4 hover:text-[#1C94E5]" />}
      />
      <StatsCard
        stat={totalRetweets}
        comment={"per tweet"}
        icon={<FaRetweet className="text-xl mx-4 hover:text-[#1C94E5]" />}
      />
      <StatsCard
        stat={totalFavs}
        comment={"per tweet"}
        icon={<FaHeart className="text-xl mx-4 hover:text-[#1C94E5]" />}
      />
    </article>
  );
};

export default Statsbar;
