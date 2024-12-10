import CardComponent from "../feed/CardComponent";

export default function HeadlinesSidebar() {
  return (
    <div className="bg-slate-300 py-2 px-3 sticky top-0 w-full h-dvh overflow-y-scroll hidden ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-4xl cursor-pointer font-bold">&times;</span>
          <HeadlineCountrySelect />
        </div>

        <HeadlinesCont />
      </div>
    </div>
  );
}
function HeadlineCountrySelect() {
  return (
    <select className="outline-none border-2 border-orange-300 rounded-md py-2">
      <option value="USA" key="">
        All
      </option>
      <option value="USA" key="">
        Argentina
      </option>
      <option value="USA" key="">
        South Africa
      </option>
    </select>
  );
}
function HeadlinesCont() {
  return (
    <div className="flex flex-col gap-4">
      <CardComponent />
      <CardComponent />
    </div>
  );
}
