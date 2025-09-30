import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 border-r p-4">
      <h2 className="font-semibold mb-3">📑 Pages</h2>
      <ul className="space-y-2">
        {/* {pages.map((p) => (
          <li
            key={p.id}
            onClick={() => onSelectPage(p)}
            className="p-2 rounded hover:bg-gray-200 cursor-pointer"
          >
            {p.title}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Sidebar;
