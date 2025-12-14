import React, { useEffect, useState } from "react";
import { decryptObjData, getCookie } from "../../modules/encryption";
import { gpNames } from "../../modules/constants";
import { useGlobalContext } from "../../context/Store";
import GPEventList from "../../pdf/GPEventList";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
export default function GPDownloadEventSheets() {
  const { myStateObject, gpSportsDateState } = useGlobalContext();
  const data = myStateObject?.data?.sort((a, b) => {
    if (a.gp < b.gp) return -1;
    if (a.gp > b.gp) return 1;
    if (a.gender < b.gender) return -1;
    if (a.gender > b.gender) return 1;
    if (a.school < b.school) return -1;
    if (a.school > b.school) return 1;
    if (a.event1rank < b.event1rank) return -1;
    if (a.event1rank > b.event1rank) return 1;
    return 0;
  });
  const BoysData = data?.filter((el) => el?.gender === "BOYS");
  const GirlsData = data?.filter((el) => el?.gender === "GIRLS");
  const schoolData = myStateObject?.school?.sort((a, b) => {
    if (a.school < b.school) return -1;
    if (a.school > b.school) return 1;
    return 0;
  });
  const navigate = useNavigate();
  const [allData, setAllData] = useState(data);
  const [gpSchools, setGpSchools] = useState(schoolData);

  const [thisGp, setThisGp] = useState("");
  const [spDate, setSpDate] = useState("");
  const [group, setGroup] = useState("");
  const [engEventName, setEngEventName] = useState("");
  const [gp, setGp] = useState("");
  let teacherdetails;
  let details = getCookie("tid");
  let schdetails = getCookie("schid");
  if (details) {
    teacherdetails = decryptObjData("tid");
  }
  if (schdetails) {
    schdetails = decryptObjData("schid");
  }

  useEffect(() => {
    if (!details) {
      if (
        teacherdetails.circle !== "admin" ||
        teacherdetails.convenor !== "admin"
      ) {
        navigate("/Logout");
      }
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setThisGp(gpNames.filter((el) => el.englishName === gp)[0]?.bengaliName);
    if (myStateObject) {
      const {
        group: myGroup,
        engEventName: myEngEventName,
        gp: myGp,
      } = myStateObject;
      setGroup(myGroup);
      setEngEventName(myEngEventName);
      setGp(myGp);
      const filteredDate = gpSportsDateState.find((item) => item.gp === myGp);
      if (filteredDate) {
        setSpDate(filteredDate.date);
      }
    }
    // eslint-disable-next-line
  }, [allData, gpSchools, gp, myStateObject, gpSportsDateState]);

  return (
    <div className="container-fluid my-5">
      <div className="noprint my-2">
        <button
          type="button"
          className="btn btn-warning my-4 btn-sm"
          onClick={() => navigate("/GPAllStudents")}
        >
          Go Back
        </button>
      </div>
      {spDate && (
        <PDFDownloadLink
          document={<GPEventList myData={myStateObject} date={spDate} />}
          fileName={`${gp} GP Event Sheets of ${group}, ${engEventName}`}
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#fff",
            backgroundColor: "navy",
            border: "1px solid #4a4a4a",
            width: "40%",
            borderRadius: 10,
          }}
        >
          {({ loading }) => (loading ? "Loading..." : "Download Event Sheet")}
        </PDFDownloadLink>
      )}
    </div>
  );
}
