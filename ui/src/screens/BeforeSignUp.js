import React from "react";
import LeftSignup from "../components/LeftSignup";
import "../style.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIndividual, setOrganistion } from "../actions";

function BeforeSignUp() {
  const dispatch = useDispatch();
  const accountType = useSelector((state) => state.account_type);

  const navLinkDisplay = () => {
    if (accountType === "IND") {
      return (
        <NavLink
          className=" BeforeSignUp-button  px-4 py-2  text-white no-underline text-center"
          to="/signUpIndividual"
        >
          Next
        </NavLink>
      );
    } else {
      return (
        <NavLink
          className=" BeforeSignUp-button  px-4 py-2  text-white no-underline text-center"
          to="/signUpOrganisation"
        >
          Next
        </NavLink>
      );
    }
  };

  return (
    <div className="grid grid-cols-3 BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-11/12">
          <div className="font-sans text-3xl p-5">Creating Account for ?</div>
          <div
            className=""
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value === "individual") dispatch(setIndividual());
              else dispatch(setOrganistion());
            }}
          >
            <div className=" font-sans text-2xl">
              <input
                type="radio"
                id="individual"
                value="individual"
                name="signUp-Type"
                className="mr-3 mb-3"
              />
              <label htmlFor="individual">Individual</label>
            </div>
            <div className=" font-sans text-2xl">
              <input
                type="radio"
                id="organisation"
                value="organisation"
                name="signUp-Type"
                className="mr-3"
              />
              <label htmlFor="organisation">Organisation</label>
            </div>
          </div>

          <div className=" BeforeSignUp-text font-sans text-xl text-blue-600">
            Already having account ? Sign In
          </div>
          <div className="p-4">{navLinkDisplay()}</div>
        </div>
        <div className="text-center text-blue-700 absolute bottom-0 mb-3 ">
          <NavLink
            className="text-blue-700 font-sans text-xl mb-2 no-underline"
            to="/homePage"
          >
            ← Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BeforeSignUp;
