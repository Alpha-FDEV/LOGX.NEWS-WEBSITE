import PaginatedHeadlines from "./PaginatedHeadlines";
import SmallCard from "./SmallCard";
import PaginationCard from "./PaginationCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  NextPlan,
  QueuePlayNextSharp,
  SkipNextRounded,
} from "@mui/icons-material";
import HeadlinesLinks from "./HeadlinesLinks";
import HeadlineLinksResults from "./HeadlineLinksResults";

const MAX_PAGINATION = 10;
const START_PAGINATION = 11;

function Headlines() {
  const { type } = useParams();
  const [count, setCount] = useState(0);
  const [endCount, setEndCOunt] = useState(9);

  if (type === !"headlines") return;
  const headlines = useSelector((state) => state.latestNews.articles);

  const paginationData = headlines.slice(0, MAX_PAGINATION);

  const otherData = headlines.slice(START_PAGINATION, headlines.length + 2);

  const handleNext = function () {
    if (count + 10 >= otherData.length - 1) return;
    setCount((count) => count + 10);
    setEndCOunt((endcount) => endcount + 10);
  };
  const handlePrev = function () {
    if (count - 10 < 0) return;

    setCount((count) => count - 10);
    setEndCOunt((endcount) => endcount - 10);
  };
  
  return (
   
    <div className="flex flex-col gap-7 px-4 bg-gray-200 pb-20  ">
      <HeadlinesHero
        paginationData={paginationData}
        otherData={otherData}
        type={type}
      />
      <div className="">
        <h2 className="font-bold text-gray-800 text-xl mb-6 text-center ">
          Trending
        </h2>
        <SmallCard otherData={otherData} count={count} endCount={endCount} />
        <div className="flex justify-center gap-10 mt-5">
          <span
            onClick={handlePrev}
            className="rounded-full cursor-pointer w-10 h-10 border-2 border-orange-500 flex justify-center items-center"
          >
            {<ArrowBackIosNew className="person-custom" />}
          </span>
          <span
            onClick={handleNext}
            className="rounded-full cursor-pointer w-10 h-10 border-2 border-orange-500 flex justify-center items-center"
          >
            {<ArrowForwardIos className="person-custom" />}
          </span>
        </div>
      </div>

      <div>
        <HeadlinesLinks />
        <HeadlineLinksResults />
      </div>
    </div>
  );
}

function HeadlinesHero({ paginationData, otherData, type }) {
  const [dataindex, setDataIndex] = useState(1);

  useEffect(function () {
    const intervalId = setInterval(function () {
      const radomData = Math.floor(Math.random() * otherData.length);
      setDataIndex(radomData);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-slate-500">
        <h2 className="font-bold text-gray-800 text-xl fixed z-20 bg-slate-200 px-2">
          {type}
        </h2>
      </div>

      <div className="lg:grid grid-cols-2 gap-2 pt-6 flex flex-col ">
        <PaginatedHeadlines paginationData={paginationData} />
        <OtherData otherData={otherData} dataindex={dataindex} />
      </div>
    </div>
  );
}

function OtherData({ otherData, dataindex }) {
  return (
    <div className="flex flex-col  ">
      <div className="lg:grid grid-cols-2 gap-3 md:flex flex-col sm:flex">
        <div className="md:h-48 ">
          <PaginationCard
            data={otherData.at(dataindex)}
            height={"h-96"}
            adjust={true}
          />
        </div>

        <div className="block md:hidden lg:block ">
          <PaginationCard
            data={otherData.at(dataindex + 1)}
            height={"h-96"}
            adjust={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Headlines;
