import React from "react";

export function SearchBox(props) {
  return <div className="search-box">
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={props.onChange}
      value={props.value}
      onKeyPress={props.onKeyPress}
    />
  </div>;
}