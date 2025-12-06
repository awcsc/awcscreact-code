import React from "react";
import Spinning_Ashoka_Chakra from "../images/Spinning_Ashoka_Chakra.gif";
import { useGlobalContext } from "../context/Store";
const Header = () => {
  const { appUpdateState } = useGlobalContext();
  return (
    appUpdateState.showFlag && (
      <div className="container-fluid noprint ">
        <div className="row d-flex justify-content-between align-items-center ">
          <div
            className="saffron col-lg-3"
            style={{
              backgroundColor: "#F4C430",
              height: 40,
              borderRadius: 10,
            }}
          ></div>
          <div
            className={`white d-flex flex-row justify-content-center align-items-center col-lg-3 m-2 p-2
          `}
            style={{ backgroundColor: "#fff", height: 40 }}
          >
            <h3 className="text-success text-center m-1 ben">
              আমতা পশ্চিম চক্র
            </h3>
            <img
              src={Spinning_Ashoka_Chakra}
              alt="Chakra"
              width={0}
              height={0}
              style={{
                width: 40,
                height: "auto",
              }}
            />

            <h3 className="text-success text-center m-1 ben">ক্রীড়া কমিটি</h3>
          </div>
          <div
            className="green col-lg-3"
            style={{
              backgroundColor: "#056608",
              height: 40,
              borderRadius: 10,
            }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Header;
