import { useState } from "react";

function RevokedCreatePost({ setModelCardOpen }) {
  const [check, SetCheck] = useState("unchecked");
  const [id, setId] = useState("");
  const [idNotFound, setIdNotFound] = useState(false);
  function verifying(e) {
    e.preventDefault();
    if (!id) return;
    SetCheck("verifying");
    const timeout = setTimeout(function () {
      setIdNotFound(true);
      SetCheck("failed");
      setId("");
    }, 4000);
  }
  return (
    <div className="fixed top-10 flex flex-col gap-8 left-20  right-20 translate-x-20 translate-y-32 z-50 bg-white w-3/4 px-10 py-8 pb-10 h-[60vh]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-700 font-bold tracking-wide">
          🫸 Only registered Presenters are allowed to Create Posts
        </h2>
        <button
          onClick={()=>setModelCardOpen(false)}
          className="text-4xl hover:bg-gray-300 p-1 text-gray-900 font-extrabold"
        >
          {" "}
          &times;
        </button>
      </div>

      {!idNotFound ? (
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold tracking-wide">
            Are you registered ?
          </p>
          <form className="flex flex-col gap-2 ">
            <label for="workid" className="text-base text-gray-600">
              Enter work Id
            </label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="number"
              id="workid"
              className="w-full py-3 px-2  outline-none border border-orange-400 rounded-md"
            />
            <input
              disabled={check === "verifying"}
              type="submit"
              value={check === "verifying" ? "verifying..." : "check"}
              onClick={(e) => verifying(e)}
              className={`"text-lg  py-2 px-2 max-w-56  flex flex-col  items-center mt-6  mb-10 justify-start  rounded-md  text-white font-bold font-roboto tracking-wide cursor-pointer " ${
                check === "verifying" ? "bg-orange-200" : "bg-orange-300"
              }`}
            />
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-red-500 text-xl font-semibold">
            Id does not exist
          </h2>
          <button
            onClick={() => {
              setIdNotFound(false);
            }}
            className="text-lg text-gray-600 font-medium bg-white border-2 px-3 py-1 rounded-md border-orange-500"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

export default RevokedCreatePost;
