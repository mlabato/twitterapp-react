import React, { useState } from "react";

const UserContext = React.createContext({
  userId: [],
  topTenRetweeted: [],
  topTenFaved: [],
  stats: []  
});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const [topTenRetweeted, setTopTenRetweeted] = useState();
  const [topTenFaved, setTopTenFaved] = useState();
  const [stats, setStats] = useState();

  const contextValue = {
    user: user,
    topTenRetweeted: topTenRetweeted,
    topTenFaved: topTenFaved,
    stats: stats
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
