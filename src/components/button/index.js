import React from "react";

export function Button(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={props.className}>{props.text}</button>
  );
}