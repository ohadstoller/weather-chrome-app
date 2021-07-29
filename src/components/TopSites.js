import React from "react";

export function TopSites(props) {
  return <div className={"top-sites"}>
    {
      (props.topSites.map(props.callbackfn))
    }
  </div>;
}