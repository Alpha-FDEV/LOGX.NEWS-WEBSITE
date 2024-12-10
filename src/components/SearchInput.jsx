import { useRadioGroup } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function SearchInput({ query, dispatch }) {
  const searchRef = useRef(null);

  useEffect(function () {
    function handleKeyDown(e) {
      if (e.ctrlKey && e.key.toLowerCase() === "k") e.preventDefault();
      searchRef.current.focus();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <input
        ref={searchRef}
        value={query}
        placeholder="Search news"
        className=" w-3/4 border-none outline-none p-2 "
        onChange={(e) =>
          dispatch({ type: "updateQuery", payload: e.target.value })
        }
      />
    </div>
  );
}
