import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./app/pages/Home";
import AllTeachers from "./app/pages/AllTeachers";
import AlternateLogin from "./app/pages/AlternateLogin";
import CircleAllStudents from "./app/pages/CircleAllStudents";
import CircleAllFirstResultPrint from "./app/pages/CircleAllFirstResultPrint";
import CircleDownloadEventSheets from "./app/pages/CircleDownloadEventSheets";
import CircleGPWiseResult from "./app/pages/CircleGPWiseResult";
import CircleGPWiseStudentList from "./app/pages/CircleGPWiseStudentList";
import CircleGroupWiseResultPrint from "./app/pages/CircleGroupWiseResultPrint";
import CircleGroupWiseResultPrintBlank from "./app/pages/CircleGroupWiseResultPrintBlank";
import CircleOfficeChestNoSheet from "./app/pages/CircleOfficeChestNoSheet";
import CirclePrintTreeList from "./app/pages/CirclePrintTreeList";
import CircleResultSection from "./app/pages/CircleResultSection";
import CircleSportsDirectNameEntry from "./app/pages/CircleSportsDirectNameEntry";
import CircleSportsEventWiseName from "./app/pages/CircleSportsEventWiseName";
import CircleStudentsNameEntry from "./app/pages/CircleStudentsNameEntry";
import Complain from "./app/pages/Complain";
import Dashboard from "./app/pages/Dashboard";
import DisplayComplain from "./app/pages/DisplayComplain";
import DownloadGPGroupWiseResultPrint from "./app/pages/DownloadGPGroupWiseResultPrint";
import DownloadGPSchoolWiseStudentList from "./app/pages/DownloadGPSchoolWiseStudentList";
import Downloads from "./app/pages/Downloads";
import ForgotPassword from "./app/pages/ForgotPassword";
import GPAllStudents from "./app/pages/GPAllStudents";
import GPAllStudentsDownload from "./app/pages/GPAllStudentsDownload";
import GPConvenorsPage from "./app/pages/GPConvenorsPage";
import GPDownloadEventSheets from "./app/pages/GPDownloadEventSheets";
import GPGroupWiseResultPrint from "./app/pages/GPGroupWiseResultPrint";
import GPGroupWiseResultPrintBlank from "./app/pages/GPGroupWiseResultPrintBlank";
import GPOfficeChestNoSheet from "./app/pages/GPOfficeChestNoSheet";
import GPPrintTreeList from "./app/pages/GPPrintTreeList";
import GPResultSection from "./app/pages/GPResultSection";
import GPSchoolWiseStudentList from "./app/pages/GPSchoolWiseStudentList";
import GpSportsDirectNameEntry from "./app/pages/GpSportsDirectNameEntry";
import GPSportsEventWiseName from "./app/pages/GPSportsEventWiseName";
import GPStudentNameEntry from "./app/pages/GPStudentNameEntry";
import Login from "./app/pages/Login";
import LogOut from "./app/pages/LogOut";
import RegUsers from "./app/pages/RegUsers";
import SetConvenors from "./app/pages/SetConvenors";
import Signup from "./app/pages/Signup";
import UpdateUP from "./app/pages/UpdateUP";
import VerifyLogin from "./app/pages/VerifyLogin";
import UserLogin from "./app/pages/UserLogin";
import UpdateMobile from "./app/pages/UpdateMobile";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "AllTeachers", element: <AllTeachers /> },
      { path: "AlternateLogin", element: <AlternateLogin /> },
      { path: "CircleAllStudents", element: <CircleAllStudents /> },
      {
        path: "CircleAllFirstResultPrint",
        element: <CircleAllFirstResultPrint />,
      },
      {
        path: "CircleDownloadEventSheets",
        element: <CircleDownloadEventSheets />,
      },
      {
        path: "CircleGPWiseResult",
        element: <CircleGPWiseResult />,
      },
      {
        path: "CircleGPWiseStudentList",
        element: <CircleGPWiseStudentList />,
      },
      {
        path: "CircleGroupWiseResultPrint",
        element: <CircleGroupWiseResultPrint />,
      },
      {
        path: "CircleGroupWiseResultPrintBlank",
        element: <CircleGroupWiseResultPrintBlank />,
      },
      {
        path: "CircleOfficeChestNoSheet",
        element: <CircleOfficeChestNoSheet />,
      },
      {
        path: "CirclePrintTreeList",
        element: <CirclePrintTreeList />,
      },
      {
        path: "CircleResultSection",
        element: <CircleResultSection />,
      },
      {
        path: "CircleSportsDirectNameEntry",
        element: <CircleSportsDirectNameEntry />,
      },
      {
        path: "CircleSportsEventWiseName",
        element: <CircleSportsEventWiseName />,
      },
      {
        path: "CircleStudentsNameEntry",
        element: <CircleStudentsNameEntry />,
      },
      {
        path: "Complain",
        element: <Complain />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "DisplayComplain",
        element: <DisplayComplain />,
      },
      {
        path: "DownloadGPGroupWiseResultPrint",
        element: <DownloadGPGroupWiseResultPrint />,
      },
      {
        path: "DownloadGPSchoolWiseStudentList",
        element: <DownloadGPSchoolWiseStudentList />,
      },
      {
        path: "Downloads",
        element: <Downloads />,
      },
      {
        path: "ForgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "GPAllStudents",
        element: <GPAllStudents />,
      },
      {
        path: "GPAllStudentsDownload",
        element: <GPAllStudentsDownload />,
      },
      {
        path: "GPConvenorsPage",
        element: <GPConvenorsPage />,
      },
      {
        path: "GPDownloadEventSheets",
        element: <GPDownloadEventSheets />,
      },
      {
        path: "GPGroupWiseResultPrint",
        element: <GPGroupWiseResultPrint />,
      },
      {
        path: "GPGroupWiseResultPrintBlank",
        element: <GPGroupWiseResultPrintBlank />,
      },
      {
        path: "GPOfficeChestNoSheet",
        element: <GPOfficeChestNoSheet />,
      },
      {
        path: "GPPrintTreeList",
        element: <GPPrintTreeList />,
      },
      {
        path: "GPResultSection",
        element: <GPResultSection />,
      },
      {
        path: "GPSchoolWiseStudentList",
        element: <GPSchoolWiseStudentList />,
      },
      {
        path: "GpSportsDirectNameEntry",
        element: <GpSportsDirectNameEntry />,
      },
      {
        path: "GPSportsEventWiseName",
        element: <GPSportsEventWiseName />,
      },
      {
        path: "GPStudentNameEntry",
        element: <GPStudentNameEntry />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "LogOut",
        element: <LogOut />,
      },
      {
        path: "RegUsers",
        element: <RegUsers />,
      },
      {
        path: "SetConvenors",
        element: <SetConvenors />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "UpdateUP",
        element: <UpdateUP />,
      },
      {
        path: "UpdateMobile",
        element: <UpdateMobile />,
      },
      {
        path: "VerifyLogin",
        element: <VerifyLogin />,
      },
      {
        path: "UserLogin",
        element: <UserLogin />,
      },
    ],
  },
]);
