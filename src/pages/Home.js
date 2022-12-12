import React, { useContext, useEffect, useState } from "react";
import UserContext from "../store/user-context";

import Header from "../layout/Header";

import StatsContainer from "../layout/StatsContainer";
import UserContainer from "../layout/UserContainer";
import TweetsContainer from "../layout/TweetsContainer";
import Statsbar from "../components/Statsbar";

const Home = () => {
  const userCtx = useContext(UserContext);

  const [topTenisLoading, setTopTenIsLoading] = useState(true);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [userDataisLoading, setUserDataIsLoading] = useState(true);

  const [hasZeroTweets, setHasZeroTweets] = useState(false);
  const [isLockedAccount, setIsLockedAccount] = useState(false);

  const id = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  const topTenUrl = "https://twitterapp-express.vercel.app/top-ten-rt/" + id;
  const statsUrl = "https://twitterapp-express.vercel.app/user-stats/" + id;
  const userUrl =
    "https://twitterapp-express.vercel.app/get-user-by-username/" + username;

  useEffect(() => {
    const fetchTopTenData = async () => {
      try {
        const response = await fetch(topTenUrl);
        const body = await response.json();

        if (response.status === 201) {
          setTopTenIsLoading(false);

          userCtx.topTenRetweeted = body.topTenRetweeted;
          userCtx.topTenFaved = body.topTenFaved;

          if (userCtx?.topTenFaved?.length === 0) {
            setIsLockedAccount(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopTenData().catch(console.error);

    const fetchStatsData = async () => {
      try {
        const response = await fetch(statsUrl);
        const body = await response.json();

        if (response.status === 201) {
          setDataIsLoading(false);

          userCtx.stats = body;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchStatsData().catch(console.error);

    const fetchUserData = async () => {
      try {
        const response = await fetch(userUrl);
        const body = await response.json();

        if (response.status === 201) {
          setUserDataIsLoading(false);

          userCtx.user = body.response.data[0];

          if (userCtx?.user?.public_metrics?.tweet_count === 0) {
            setHasZeroTweets(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData().catch(console.error);
  }, [userCtx, topTenUrl, statsUrl, userUrl]);

  return (
    <section className="bg-[#15202B] ">
      <Header />

      <article className="flex flex-col notebook:flex-row justify-center ">
        <StatsContainer dataIsLoading={dataIsLoading} />

        <div className="notebook:hidden mx-auto">
          <div className=" w-1/2 font-bold text-center my-[1rem] mx-auto text-white  rounded-3xl  p-2 bg-[#273340] ">
          @{userCtx.user.username} stats
          </div>
          <Statsbar />
        </div>

        <TweetsContainer
          hasZeroTweets={hasZeroTweets}
          username={username}
          isLockedAccount={isLockedAccount}
          topTenisLoading={topTenisLoading}
        />

        <UserContainer userDataisLoading={userDataisLoading} />
      </article>
    </section>
  );
};

export default Home;
