import { Link, NavLink } from "react-router-dom"
import UseCustomFeedSelection from "../customData/UseCustomFeedSelection";

function HeadlinesLinks() {
    const links = UseCustomFeedSelection()
    console.log(links)
    return (
      <div className="hidden" >
        <ul className="flex  gap-4   select-none ">
          {links.slice(0,12).map((link) => (
            <li className="text-base font-semibold text-gray-700 border-b-2 border-zinc-400 px-1">
              <NavLink
                to={link.category}
                className="text-gray-900 font-roboto hover:text-gray-600"
              >
                {link.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default HeadlinesLinks
