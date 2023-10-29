import { NavLink } from "react-router-dom";

import { Scroll, Timer } from "@phosphor-icons/react";

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-10">
        <img src="/Logo.svg" alt="" />

        <div className="flex gap-5">
          <NavLink
            to="/"
            title="timer"
            className={({ isActive }) =>
              isActive ? "text-green-500" : undefined
            }
          >
            <Timer className="hover:border-green-400 hover:border-b w-6 h-6" />
          </NavLink>

          <NavLink
            to="/history"
            title="history"
            className={({ isActive }) =>
              isActive ? "text-green-500" : undefined
            }
          >
            <Scroll className=" hover:border-green-400 hover:border-b w-6 h-6" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
