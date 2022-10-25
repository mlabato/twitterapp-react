import { useContext } from "react";
import UserContext from "../store/user-context";
import TweetCard from "../UI/TweetCard";

const TopTenFaved = () => {
  const userCtx = useContext(UserContext);

  return (
    <section>
      {userCtx.topTenFaved !== undefined && userCtx.user !== undefined
        ? userCtx.topTenFaved?.map((tweet) => {
            return (
              <TweetCard
                name={userCtx.user.name}
                username={userCtx.user.username}
                profile_image={userCtx.user.profile_image_url}
                text={tweet.text}
                url={tweet.url}
                favs={tweet.favs}
                date={tweet.created_at}
              />
            );
          })
        : ""}
    </section>
  );
};

export default TopTenFaved;
