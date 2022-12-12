import React, { useRef, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../store/user-context";

const UserSearchForm = (props) => {
  const usernameInputRef = useRef();
  const navigate = useNavigate();
  let location = useLocation();
  const userCtx = useContext(UserContext);

  const [errorResponse, setErrorResponse] = useState(false)
  const [errorData, setErrorData] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const url = "https://twitterapp-express.vercel.app/get-user-by-username/" + username;

    try {
      const response = await fetch(url);
      const body = await response.json();

      if (response.status === 201 && body.response.data) {
           
        userCtx.user = body.response.data[0];
        localStorage.setItem("username", body.response.data[0].username);
        localStorage.setItem("userId", body.response.data[0].id);

        if (location.pathname === "/") {
          navigate("/home");
        } else {
          navigate(0);
        }
      }else if(response.status === 201 && body.response.errors){
        setErrorResponse(true);
        setErrorData(body.response.errors[0].detail)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={props.formClasses}>
      {console.log(errorData)}
      <label className={props.labelClasses}>{props.label}</label>
      <input
        className={props.inputClasses}
        placeholder="Insert an username"
        ref={usernameInputRef}
      ></input>
       {errorResponse && <p className="text-sm font-semibold text-[#1C94E5] text-center">{errorData}</p>}
      <button className={props.buttonClasses} type="submit">
        {props.buttonText}
      </button>
     
    </form>
  );
};

export default UserSearchForm;
