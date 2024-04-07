import React, { useEffect, useState } from "react";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import TheatersIcon from "@mui/icons-material/Theaters";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector } from "react-redux";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Header = () => {
  const loginType = useSelector(state=>state.userLoginDetails.loginType)
  // console.log(loginType , "from header")
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  // get user details from localstorage
  const getUserDetails = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (getUserDetails && getUserDetails.email) {
      setLogout(true);
    } else {
      setLogout(false);
    }
  }, [getUserDetails]);
  // remove user data from localstorage to logout user and navigate to home page
  const logoutUser = async () => {
      try {
        if(loginType === "database"){
      const token = Cookies.get("loginCookies");
      const options = {
        method: "POST",
        url: `https://enterbackend-production.up.railway.app/api/logout`,
        headers: {
          accept: "application/json",
        },
        data: { token, email: getUserDetails.email },
      };
      const newUserDetails = await axios(options);
      if (newUserDetails.status === 200) {
        toast.success("Logout Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        Cookies.remove("loginCookies");
        localStorage.removeItem("user");
        setLogout(false);
        setTimeout(() => {
          navigate("/");
        }, 100);
      } }
      else{
        toast.success("Logout Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        Cookies.remove("loginCookies");
          localStorage.removeItem("user");
          setLogout(false);
          setTimeout(() => {
            navigate("/");
          }, 100);
          
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to set AOS effect based on screen width

  return (
    <>
      <section className="md:h-[80%] md:flex block md:w-12 m-2 h-14 w-full bg-[#161D2F] text-[#ffffff] rounded-2xl fixed ">
        <div className="flex md:flex-col space-y-4 justify-between flex-row">
          <div className="md:ml-3 md:mt-4 ml-4 mt-3 ">
            <Link title="Entertaiment" to="/">
              <TheatersIcon className="bg-[#FC4747] rounded-lg " />{" "}
            </Link>
          </div>
          <div className="flex">
            <nav>
              <ul className="flex md:ml-2 md:space-y-6 space-x-4 md:space-x-0 md:block ">
                <Link title="Home" to="/">
                  <AppsIcon />
                </Link>
                <Link title="Movies" to="movies">
                  <VideoLibraryIcon />
                </Link>
                <Link title="Tv Series" to="tvseries">
                  <PersonalVideoIcon />
                </Link>
                <Link title="Bookmarks" to="bookmarks">
                  <BookmarksIcon />
                </Link>
              </ul>
            </nav>
          </div>

          <div className="md:mt-4 flex justify-end">
            <Link
              title="Login/Singup"
              to={"login"}
              className="md:ml-3 mr-4 mt-0 mb-2  md:mb-4 "
            >
              {logout ? (
                <LogoutIcon
                  onClick={logoutUser}
                  title={"logout"}
                  className="mb-2 md:mb-4  bg-[#4747FC] rounded-lg "
                />
              ) : (
                <NoAccountsIcon className="mb-2 bg-[#165524]  rounded-lg md:mb-4" />
              )}
            </Link>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};

export default Header;
