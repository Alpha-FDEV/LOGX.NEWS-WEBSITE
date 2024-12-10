import { useDispatch } from "react-redux";
import { addFollowing } from "../../slices/LatestSlice";

function FollowBtn({ text, followerName }) {
  const dispatch = useDispatch();

  

  function handleFollowowing(name) {
    dispatch(addFollowing(name));
  }
  return (
    <button
      onClick={() => handleFollowowing(followerName)}
      className="bg-orange-500 text-lg text-white font-bold px-2 rounded-sm py-1"
    >
      {text}
    </button>
  );
}

export default FollowBtn;
