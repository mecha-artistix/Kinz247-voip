import { useEffect, useReducer, useState } from "react";
import NavElement from "../utilities/NavElement";
import NavigationContext from "../contexts/NavigationContext";
import { navigation } from "../assets/StaticData";

function LeftPanel() {
  const [isExpanded, setisExpanded] = useState(true);
  const [ulAlign, setulAlign] = useState({
    current: "",
    expanded: "items-baseline",
    collapsed: "items-center",
  });
  function handleExpand() {
    setisExpanded((isExpanded) => (isExpanded = !isExpanded));
  }
  useEffect(() => {
    isExpanded
      ? setulAlign({ ...ulAlign, current: ulAlign.expanded })
      : setulAlign({ ...ulAlign, current: ulAlign.collapsed });
  }, [isExpanded]);

  return (
    <NavigationContext.Provider value={{ isExpanded }}>
      <div className="left-panel border-r  border-r-pr_border">
        <div
          style={isExpanded ? { width: "300px" } : { width: "160px" }}
          className="px-8 "
        >
          <button
            onClick={handleExpand}
            className="text-1xl rounded-md border-dotted border-slate-500 bg-slate-300 px-2 py-1"
          >
            {isExpanded ? "Collapse <" : "Expand >"}
          </button>

          <ul
            className={"flex flex-col justify-center py-4 " + ulAlign.current}
          >
            {navigation.map((navItem) => {
              return (
                <NavElement
                  linkIcon={navItem.icon}
                  linkText={navItem.name}
                  nestedNav={navItem?.children}
                  key={navItem.link}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </NavigationContext.Provider>
  );
}

export default LeftPanel;
