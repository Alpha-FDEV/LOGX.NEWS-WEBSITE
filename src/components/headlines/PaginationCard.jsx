import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import LikesAndDislikes from "../utilities/LikesAndDislikes";

function PaginationCard({ data, height, adjust }) {
  if (!data) return;
  console.log(data)

  const {
    author,
    content,
    description,
    publishedAt: date,
    source,
    title,
    url,
    urlToImage: image,
  } = data;

  return (
    <div className={`relative ${height} group `}>
      <div className={`lg":w-full w-fit h-full`}>
        <img src={`${image}`} alt={title} className="h-full lg:w-full  object-cover" />
      </div>
      <div className="absolute top-0 flex flex-col justify-between  w-full">
        <div className="px-4 pt-4 flex justify-between bg-gray-800 bg-opacity-5">
          <p className="text-start text-gray-300 z-30">{author}</p>
          <div className="bg-white border-2 z-10  opacity-0 border-dotted w-7 cursor-pointer h-7 rounded-md border-orange-500 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <MoreVertOutlinedIcon className="more-custom" />
          </div>
        </div>
        <div className=" flex flex-col justify-end flex-wrap lg:mt-48 ">
          <div
            className={` ${
              adjust ? "" : "pb-12"
            } flex flex-col  gap-4  top-32 bg-zinc-950 bg-opacity-20`}
          >
            <p
              className={` ${
                adjust ? "text-sm" : "text-xl"
              }  text-start text-white font-semibold z-30 px-3`}
            >
              {title}
            </p>
            <div
              className={`z-10 flex pr-2 justify-end items-baseline brightness-75  transition-all group-hover:brightness-90 ${
                adjust ? "" : ""
              }`}
            >
              <LikesAndDislikes />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-15"></div>
    </div>
  );
}

export default PaginationCard;
