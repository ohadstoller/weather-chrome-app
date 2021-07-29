import React from "react";

export function Site(props) {
  return <div className={"site-tile"}>
    <a className={"site-link"} href={props.site.url}>
      {props.site.title}
    </a>
  </div>;
}