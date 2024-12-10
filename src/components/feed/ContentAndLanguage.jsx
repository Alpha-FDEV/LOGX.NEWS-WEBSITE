import { Language } from "@mui/icons-material";
import UseNewsLanguages from "../customData/UseNewsLanguages";

function ContentAndLanguage() {
  const countries = UseNewsLanguages();

  return (
    <div className="flex flex-col ml-5 w-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-gray-900">
          Preffered language
        </h1>
        <p className="text-base text-gray-700">
        <Language/>
          Choose your prefered language for post titles on the feed
        </p>
      </div>
      <SelectInput countries={countries} />
    </div>
  );
}

function SelectInput({ countries }) {
  console.log(countries);
  return (
    <select className="border-2 border-gray-600 rounded-md py-3 px-2 mt-6">
      {countries.map((country) => (
        <option value={country.language} key={country.code}>
          {country.language}
        </option>
      ))}
    </select>
  );
}

export default ContentAndLanguage;
// https://newsapi.org/v2/everything?q=Apple&from=2024-10-22&sortBy=popularity&language=en&apiKey=YOUR_API_KEY
