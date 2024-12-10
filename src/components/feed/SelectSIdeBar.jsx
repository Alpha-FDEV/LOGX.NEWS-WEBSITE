import { NavLink } from "react-router-dom";

import {
  Home,
  Language,
  ManageAccounts,
  GroupAdd,
  Block,
} from "@mui/icons-material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function SelectSidebar() {
  return (
    <nav className="hidden md:block bg-gray-900 py-6  w-full  max-w-64 sticky top-0 border-r-2 border-gray-400 ">
      <ul className="flex flex-col gap-1">
        <li className="flex justify-between hover:bg-gray-100 group cursor-pointer pl-4 items-center pr-2">
          <NavLink
            to="myfeed"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-orange-500 hover:text-gray-500  scale-95 selectsidebar flex items-center gap-2 w-full"
                : " selectsidebar flex hover:text-gray-500  items-center gap-2 w-full"
            }
          >
            <Home className="feedIcons-custom" />
            <p className="text-white group-hover:text-gray-800">Myfeed</p>
            <span className="ml-auto -rotate-90">
              <ExpandMoreOutlinedIcon className="feedIcons-custom" />
            </span>
          </NavLink>
        </li>

        <li className="flex justify-between hover:bg-gray-100 group cursor-pointer pl-4 items-center pr-2">
          <NavLink
            to="manage"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-orange-500 hover:text-gray-500 scale-105 selectsidebar flex items-center gap-2 w-full"
                : " selectsidebar flex hover:text-gray-500  items-center gap-2 w-full"
            }
          >
            <ManageAccounts className="feedIcons-custom " />
            <p className="text-white group-hover:text-gray-800">Manage</p>
            <span className="ml-auto -rotate-90">
              <ExpandMoreOutlinedIcon className="feedIcons-custom" />
            </span>
          </NavLink>
        </li>

        <li className="flex justify-between group hover:bg-gray-100 cursor-pointer pl-4 items-center pr-2">
          <NavLink
            to="contentandlanguage"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-orange-500 hover:text-gray-500  scale-105 selectsidebar flex items-center gap-2 w-full"
                : " selectsidebar hover:text-gray-500  flex items-center gap-2 w-full"
            }
          >
            <Language className="feedIcons-custom" />
            <p className="text-white group-hover:text-gray-800">
              Content & Language
            </p>
            <span className="ml-auto -rotate-90">
              <ExpandMoreOutlinedIcon className="feedIcons-custom" />
            </span>
          </NavLink>
        </li>

        <li className="flex justify-between hover:bg-gray-100 cursor-pointer pl-4 items-center pr-2 text-white group">
          <NavLink
            to="following"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-orange-500 hover:text-gray-500  scale-105 selectsidebar flex items-center gap-2 w-full"
                : " selectsidebar flex hover:text-gray-500  items-center gap-2 w-full"
            }
          >
            <GroupAdd className="feedIcons-custom" />
            <p className="text-white group-hover:text-gray-800">Following</p>
            <span className="ml-auto -rotate-90">
              <ExpandMoreOutlinedIcon className="feedIcons-custom" />
            </span>
          </NavLink>
        </li>

        <li className="flex justify-between group hover:bg-gray-100 pl-4 cursor-pointer items-center pr-2">
          <NavLink
            to="blocked"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-orange-500 scale-105 selectsidebar hover:text-gray-500  flex items-center gap-2 w-full"
                : " selectsidebar flex   items-center gap-2 w-full hover:text-gray-500 "
            }
          >
            <Block className="feedIcons-custom" />
            <p className="text-white group-hover:text-gray-800">
              Blocked items
            </p>
            <span className="ml-auto -rotate-90">
              <ExpandMoreOutlinedIcon className="feedIcons-custom" />
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SelectSidebar;
