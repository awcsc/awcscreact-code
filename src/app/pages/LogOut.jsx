import React, { useEffect } from "react";
import { deleteAllCookies } from "../../modules/encryption";
import { useGlobalContext } from "../../context/Store";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const navigate = useNavigate();
  const { setState } = useGlobalContext();
  useEffect(() => {
    deleteAllCookies();
    navigate("/UserLogin");
    setState({
      USER: {},
      ACCESS: null,
      LOGGEDAT: "",
      TYPE: null,
    });
    // eslint-disable-next-line
  }, []);
  return <div className="container"></div>;
};

export default LogOut;
