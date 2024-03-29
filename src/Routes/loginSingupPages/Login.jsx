import React, { useState ,useMemo, useEffect } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoginDetailsReducer } from "../../Redux/loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {
  AOS.init();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState("");
  const logedUser = useSelector(
    (state) => state.userLoginDetails.loggedUserDetails
  );
  useEffect(() => {
    document.title = `Login`
   }, [])
  // console.log(logedUser.status , logedUser)
 useMemo(() => logedUser, [logedUser]);
  const styles = {
    width: "50px",
    height: "50px",
  };
  // get user email and password in state
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  // update loginDetails usestate
  const setDataToHook = (event) => {
    const { name, value } = event.target;
    setLoginDetails((previousDetails) => ({
      ...previousDetails,
      [name]: value,
    }));
  };
  // checking email field or password field not empty and dispatch function to make api post call to login user when user click on button
  const sendDataToServer = (event) => {
    event.preventDefault();
    dispatch(userLoginDetailsReducer(loginDetails));
    // console.log("dispatch called");
    if (loginDetails.email === "" && loginDetails.password === "") {
      toast.info("Enter details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if(!logedUser.status){
      toast.error("Some Error Occured", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else{
      toast.success("Login Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");

      // console.log(loginDetails);
    }

    // dispatch(userLoginDetailsReducer(loginDetails))
    // console.log(loginDetails)
  };
  const handleFocus = (fieldName) => {
    // show warning if field is empty
    setFocusedField(fieldName);
  };
  return (
    <>
      <form action="submit" method="get">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex mx-auto w-auto md:w-[60%]  justify-center items-center   "
        >
          <div className="container p-4  mt-28 rounded-lg my-8 ">
            <div className="flex justify-center">
              <TheatersIcon
                className="bg-[#FC4747] rounded-lg"
                style={styles}
              />
            </div>
            <div className="bg-[#161D2F] rounded-xl ">
              <div className="flex m-6 justify-center">
                <h1 className="text-3xl text-zinc-200 ">Login</h1>
              </div>
              <div className="flex m-6 justify-center">
                <input
                  className="bg-[#171e31] w-[75%] border-b-2 outline-0 text-zinc-200  "
                  onFocus={() => handleFocus("email")}
                  name="email"
                  type="text"
                  onChange={setDataToHook}
                  value={loginDetails.email}
                  placeholder="Enter your email"
                />
              </div>
              {focusedField === "name" && !loginDetails.email && (
                <p className="flex justify-center text-red-500 mt-1">
                  Enter email
                </p>
              )}
              <div className="flex m-6 justify-center">
                <input
                  className=" border-b-2 bg-[#161D2F] w-[75%] outline-0 text-zinc-200 "
                  onFocus={() => handleFocus("password")}
                  name="password"
                  value={loginDetails.password}
                  onChange={setDataToHook}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              {focusedField === "name" && !loginDetails.password && (
                <p className="flex justify-center text-red-500 mt-1">
                  Password required
                </p>
              )}
              <div className="flex justify-center m-8  ">
                <button
                  onClick={sendDataToServer}
                  className="text-xl p-2 bg-[#FC4747] rounded-lg text-zinc-200"
                >
                  Login To Your Account
                </button>
              </div>
              <div className="flex justify-center ">
                <h3 className="text-lg text-zinc-200 mb-3 ">
                  Don't have an Account ?{" "}
                  <Link to={"/singup"} className="text-blue-700">
                    SignUp
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
