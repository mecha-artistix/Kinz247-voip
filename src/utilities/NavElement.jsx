import { useState, useContext, useEffect } from "react";
import NavigationContext from "../contexts/NavigationContext";
import IconDown from "../assets/icons/IconDown";
const defaultIcon = "😒";
const defaultText = "Default Text";

function NavElement({ linkIcon, linkText, nestedNav }) {
  const { isExpanded } = useContext(NavigationContext);
  const [expandChild, setexpandChild] = useState(false);

  useEffect(() => {
    if (!isExpanded) setexpandChild(false);
  }, [isExpanded]);

  function handleExpandChild() {
    if (!nestedNav.length > 0) return;
    setexpandChild((expandChild) => (expandChild = !expandChild));
  }

  return (
    <>
      <li className="list-none flex items-center space-x-4 my-2 text-base ">
        <span className="icon">{linkIcon ? linkIcon : defaultIcon}</span>
        {isExpanded && (
          <button
            onClick={handleExpandChild}
            className="nav-text link-primary flex"
          >
            {isExpanded && (linkText ? linkText : defaultText)}

            {nestedNav && (
              <span className="ml-2 translate-y-1">
                <IconDown size={20} />
              </span>
            )}
          </button>
        )}
      </li>
      {expandChild && (
        <ul className="bg-slate-200 p-4 border-2 border-slate-400">
          {nestedNav &&
            nestedNav.map((item) => {
              return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
      )}
    </>
  );
}

export default NavElement;
