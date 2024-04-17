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
      <li className="my-2 flex list-none items-center space-x-4 text-base  ">
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
        <ul className="border-2 bg-gray-50 p-4">
          {nestedNav &&
            nestedNav.map((item) => {
              return (
                <li key={item.name} className="link-primary">
                  {item.name}
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
}

export default NavElement;
