import React from "react";

export function Button(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
  );
}