import { useContext } from "react";
import UserContext from "../store/user-context";
import TweetCard from "../UI/TweetCard";

const TopTenRetweeted = () => {
  const userCtx = useContext(UserContext);

  return (
    <section >
      {userCtx.topTenRetweeted !== undefined && userCtx.user !== undefined
        ? userCtx.topTenRetweeted?.map((tweet) => {
            return (
              <TweetCard
                name={userCtx.user.name}
                username={userCtx.user.username}
                profile_image={userCtx.user.profile_image_url}
                text={tweet.text}
                retweets={tweet.retweet}
                url={tweet.url}
                date={tweet.created_at}
              />
            );
          })
        : ""}
    </section>
  );
};

export default TopTenRetweeted;
