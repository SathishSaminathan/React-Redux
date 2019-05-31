import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  const [searchKey, updateSearchKey] = useState("");
  const [isLoading, setLoader] = useState(false);
  //   props.searchKey(searchKey)
  const onChangeSearchKey = value => {
    updateSearchKey(value);
    // setTimeout(() => {
    //   props.searchKey(searchKey);
    //   setLoader(true)  
    // }, 2000);
    props.searchKey(value);
  };
  return (
    <div className="inputContainer">
      <div className="inputArea">
        <input
          onChange={e => onChangeSearchKey(e.target.value)}
          value={searchKey}
        />
        {props.isLoading > 0 && <div className="spinner" />}
      </div>
        <hr />
    </div>
  );
}
export default Header;
