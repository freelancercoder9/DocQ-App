import React from "react";
import LeftSignup from "../components/LeftSignup";
import { useHistory } from "react-router-dom";
import VectorSignUp from "../Icons/VectorSignUp.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getCity,
  getState,
  getCreatepwd,
  getConfirmPwd,
  setRadioOrgCount,
} from "../actions";
// import { org_SignUp_Service } from "../services/UserServices";

function SignUpOrg2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const orgData = useSelector((state) => state.signUpOrg);
  const onClick_createAccount = async () => {
    // const res = await org_SignUp_Service(orgData);
    // console.log("res from service:", res);
    history.push("/dashboardScreen");
  };
  const onClickBackToHome = () => {
    history.push("/homePage");
  };
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2 w-5/12">
                State
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  dispatch(getState(e.target.value));
                }}
              />
            </div>

            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                City
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  dispatch(getCity(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between ">
              <div className="flex justify-between my-2">
                <label className="text-blue-700 font-sans text-xl mb-2">
                  How many users you have ?
                </label>
              </div>
              <div
                className="w-7/12"
                onChange={(e) => {
                  //console.log(e.target.value);
                  dispatch(setRadioOrgCount(e.target.value));
                }}
              >
                <input
                  type="radio"
                  id=">10"
                  value=">10"
                  name="org_count"
                  className="mr-2"
                />
                <label htmlFor=">10" className="text-xl mr-2">
                  {">"}10
                </label>
                <input
                  type="radio"
                  id=">50"
                  value=">50"
                  name="org_count"
                  className="mr-2"
                />
                <label htmlFor=">50" className="text-xl mr-2">
                  {">"}50
                </label>
                <input
                  type="radio"
                  id=">1000"
                  value=">1000"
                  name="org_count"
                  className="mr-2"
                />
                <label htmlFor=">100" className="text-xl mr-2">
                  {">"}1000
                </label>
                <input
                  type="radio"
                  id="<100"
                  value="<100"
                  name="org_count"
                  className="mr-2"
                />
                <label htmlFor="<100" className="text-xl mr-2">
                  {"<"}100
                </label>
              </div>
            </div>
            {/* <div className="my-2">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Document verification
              </label>
              <div className="flex  justify-around p-1 bg-gray-200 w-28">
                <img src={VectorSignUp} alt={VectorSignUp} />
                <label className="SignUp-upload text-gray-700 text-lg">
                  upload
                </label>
              </div>
            </div> */}
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Create Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  dispatch(getCreatepwd(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  dispatch(getConfirmPwd(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button
              className=" BeforeSignUp-button  px-4 py-1  text-white no-underline"
              onClick={onClick_createAccount}
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 p-3 absolute bottom-0 mb-3">
          <button
            className="text-blue-700 font-sans text-xl mb-2 no-underline"
            onClick={onClickBackToHome}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpOrg2;
