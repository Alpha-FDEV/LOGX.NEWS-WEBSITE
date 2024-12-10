import { useSelector } from "react-redux";
import FollowBtn from "../utilities/FollowBtn";

function FollowUser({ user }) {
  console.log(user)
   const following = useSelector((state) => state.latestNews.following);
  const IsFollowing = following.some(
    (followed) => followed.author === user.author
  );
  return (
    <div className="flex justify-between items-center gap-5 pr-4">
      <div className="flex gap-1">
        <div className="w-14 h-14 flex justify-center items-center p-1 border-2 border-orange-600 rounded-full">
          <img
            src=""
            alt="Reply Image"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="flex gap-1 text-gray-100">
            <h3 className="font-roboto text-base text-gray-100 block">
              Ido Shahuman
            </h3>
          </div>
          <p className="text-gray-100">@Idoshamun</p>
        </div>
      </div>
      <div>
        <FollowBtn text={IsFollowing ? "unfollow" : "follow"} followerName={user} />
      </div>
    </div>
  );
}

export default FollowUser;
