import UseFetchHeadlines from "../newsData/UseFetchHeadlines";
import PaginationCard from "./PaginationCard"
import SmallCard from "./SmallCard";

function HeadlineLinksResults() {
    return (
      <div className="grid grid-cols-2 bg-white pb-24 pl-2  pt-4">
        <RightResults />
        <ResultsLeft/>
      </div>
    );
}
function RightResults() {
    const data= {
    "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
    },
    "author": "William Lewis",
    "title": "Opinion | On political endorsement - The Washington Post",
    "description": "A note from the publisher:",
    "url": "https://www.washingtonpost.com/opinions/2024/10/25/washington-post-endorsement/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4XZEO5PP4ZG2VKS73CVZQ6IQHU.jpg&w=1440",
    "publishedAt": "2024-10-25T20:38:49Z",
    "content": "William Lewis is publisher and chief executive officer of The Washington Post.\r\nThe Washington Post will not be making an endorsement of a presidential candidate in this election. Nor in any future p… [+131 chars]"
}
    return (
      <div className="flex gap-2">
        <PaginationCard data={data} height={"h-60"} adjust={true} />
        <PaginationCard data={data} height={"h-60"} adjust={true} />
      </div>
    );
}

function ResultsLeft() {
    return <div>

        <SmallCard />

    </div>
}

export default HeadlineLinksResults
