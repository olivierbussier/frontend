import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Globals } from "../../Services/Globals";
import { apiError } from "../../Services/Redux/slice/authSlice";
import { setName } from "../../Services/Redux/slice/profileSlice";

import "./style.scss";

/**
 * This component is used to
 *  - display the header of the application. User information is directly get from redux state, this allow dynamic refresh if the user change
 *  - manage editing on user profile information (firstName & lastName)
 *
 * @returns {JSX.Element}
 */
export const HeaderUser = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const ctx = useContext(Globals);
  const api = ctx.getApi();

  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
  }, [profile]);

  const handleSave = () => {
    // Update profile & state
    dispatch(setName({firstName, lastName}))
    api
      .updateProfile(firstName, lastName)
      .then((response) => {
        // Everything OK, close dialog
        setEdit(false);
      })
      .catch((error) => {
        dispatch(apiError({code: 500, message: error.message}))
        console.log("err save")
      });
  };

  return edit ? (
    <div className="header">
      <h1>Welcome back</h1>
      <div className="inputs-profile">
        <input
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          placeholder="Last Name"
        />
      </div>
      <div className="inputs-profile">
        <button className="edit-button" onClick={handleSave}>
          Save
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
            setEdit(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button
        className="edit-button"
        onClick={(e) => {
          setEdit(true);
        }}
      >
        Edit Name
      </button>
    </div>
  );
};
