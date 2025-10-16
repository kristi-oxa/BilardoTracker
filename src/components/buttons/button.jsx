import React from "react";

export function Button({ onClick, updateStep, buttonId, buttonText }) {
    return (
      <button
        onClick={() => onClick(updateStep)}
        className={`button-${buttonId}`}
        type="button"
      >
          {buttonText}
      </button>
    );
}