import React, {useContext} from "react";

import Barrita from "./Barrita";
import Movies from "./Movies";
import {AuthContext} from "../context/AuthContext";

const Home = () => {
    const {user, logged} = useContext(AuthContext)
    console.log(user);
    console.log(logged);
  return (
    <>
      <Barrita />
      <Movies />
    </>
  );
};

export default Home;
