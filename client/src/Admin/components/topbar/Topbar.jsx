import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ArrowDropDown,
} from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { Logout } from "../../../Context/AuthContext/AuthAction";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div> */}
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
          <div className="profile">
            {/* <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span> */}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(Logout())}
            >
              Logout
            </span>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
