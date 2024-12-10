import { SkipNext } from "@mui/icons-material";
import LikesAndDislikes from "../utilities/LikesAndDislikes";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";


function SmallCard({ otherData,count,endCount }) {
  
  
  if (!otherData) return;
  return (
    <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 sm:grid-cols-2 ">
      {otherData.slice(count,endCount).map((article, index) => (
        <CardSmall data={article} isEven={index % 2 !== 0}>
          <div className="flex shadow-xl rounded-md items-center bg-white gap-2 px-2 py-1 hover:-translate-y-3 transition-all duration-500 group">
            <div className="relative">
              <img
                src={article.urlToImage}
                alt="news image"
                className=" w-full h-full min-w-36 max-h-20 object-cover group-hover:brightness-20"
              />
              <div className="bg-white border-2 z-10  opacity-0 border-dotted w-7 cursor-pointer h-7 rounded-md border-orange-500 group-hover:opacity-100 shadow-lg transition-opacity duration-500 ease-in-out absolute top-2 right-2 scale-90">
                <MoreVertOutlinedIcon className="more-custom" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm font-semibold text-gray-900 text-start">
                {article.author.split(" ").slice(0, 2).join(" ")}
              </p>
              <p className="text-sm text-start font-thin text-gray-800">
                {article.title.split(" ").slice(0, 15).join(" ")}...
              </p>
              <div className="scale-75 ">
                <LikesAndDislikes />
              </div>
            </div>
          </div>
        </CardSmall>
      ))}
      
    </div>
  );
}

function CardSmall({ data, children, isEven }) {
  return (
    <>
      {isEven ? (
        children
      ) : (
        <div className="flex shadow-xl rounded-md items-center bg-white gap-2 px-2 py-1 hover:-translate-y-3 transition-all duration-500 group">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-gray-900 text-start">
              {data.author.split(" ").slice(0, 2).join("")}
            </p>
            <p className="text-sm text-start font-thin text-gray-800">
              {data.title.split(" ").slice(0, 15).join(" ")}...
            </p>
            <div className="scale-75 bg-blend-color">
              <LikesAndDislikes />
            </div>
          </div>
          <div className="relative">
            <img
              src={data.urlToImage}
              alt="news image"
              className=" w-full h-full min-w-36 max-h-20 object-cover"
            />
            <div className="bg-white border-2 z-10  opacity-0 border-dotted w-7 cursor-pointer h-7 rounded-md border-orange-500 group-hover:opacity-100 shadow-lg transition-opacity duration-500 ease-in-out absolute top-2 right-2 scale-90">
              <MoreVertOutlinedIcon className="more-custom" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallCard;
