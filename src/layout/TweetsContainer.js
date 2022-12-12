import React, { useState } from "react";
import TopTenRetweeted from "../components/TopTenRetweeted";
import Spinner from "../UI/Spinner";
import TopTenFaved from "../components/TopTenFaved";

const TweetsContainer = (props) => {
  const [topTenContainer, setTopTenContainer] = useState(true);
  const topTenContainerHandler = () => {
    setTopTenContainer(!topTenContainer);
  };

  

  return (
    <article className={"flex flex-col notebook:w-3/5   border-x-[1px] border-[#38444D]" }>
     
      {props.hasZeroTweets && (
        <div className="text-white text-4xl mx-auto text-center my-6 p-4 h-screen">
          {props.username} has not tweeted yet
        </div>
      )}
      {props.isLockedAccount && (
        <div className="text-white text-4xl mx-auto text-center my-6 p-4 h-screen">
          {props.username} has a locked account
        </div>
      )}

      {!props.hasZeroTweets && !props.isLockedAccount && (
        <div className="flex flex-row mx-auto p-2">
          <button
            className={
              topTenContainer
                ? "font-bold notebook:text-2xl text-white  rounded-3xl text-center p-2 bg-[#273340] "
                : "font-bold notebook:text-2xl text-white  rounded-3xl text-center p-2"
            }
            onClick={topTenContainerHandler}
          >
            #Top10Retweeted
          </button>

          <button
            className={
              !topTenContainer
                ? "font-bold notebook:text-2xl text-white  rounded-3xl text-center p-2 bg-[#273340] "
                : "font-bold notebook:text-2xl text-white  rounded-3xl text-center p-2"
            }
            onClick={topTenContainerHandler}
          >
            #Top10Liked
          </button>
        </div>
      )}

      <div className="notebook:w-3/5 mx-[3rem] notebook:mx-auto w-[330px]">
        {props.topTenisLoading && (
          <div className="p-4 mx-auto h-screen flex justify-center">
            {" "}
            <Spinner />{" "}
          </div>
        )}
        {!props.topTenisLoading && topTenContainer && <TopTenRetweeted />}

        {!props.topTenisLoading && !topTenContainer && <TopTenFaved />}
      </div>
    </article>
  );
};

export default TweetsContainer;
