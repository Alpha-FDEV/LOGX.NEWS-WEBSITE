import { useEffect, useReducer } from "react";

function UsehandleStates() {
  //loading,datareceived,error,datafailed,

  useEffect(function () {
    window.addEventListener("online", () => {
      dispatch({ type: "online" });
    });
    window.addEventListener("offline", () => {
      dispatch({ type: "offline" });
    });

    return () => {
      window.removeEventListener("online", () => {
        dispatch({ type: "online" });
      });
      window.removeEventListener("offline", () => {
        dispatch({ type: "offline" });
      });
    };
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, status: "loading" };
      case "dataReceived":
        return { ...state, status: "ready", articles: action.payload };
      case "dataFailed":
        return { ...state, status: "error", error: action.payload };
      case "updateQuery":
        return { ...state, query: action.payload };
      case "online":
        return { ...state, isOnline: true };
      case "offline":
        return { ...state, isOnline: false };
    }
  }

  const initialState = {
    articles: [],
    status: "ready",
    query: "",
    error: "",
    isOnline: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return [
    state.status,
    state.articles,
    state.query,
    state.error,
    state.isOnline,
    dispatch,
  ];
}

export default UsehandleStates;
