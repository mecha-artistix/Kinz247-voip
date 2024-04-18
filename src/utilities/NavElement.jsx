import { useState, useContext, useEffect } from "react";
import NavigationContext from "../contexts/NavigationContext";
import IconDown from "../assets/icons/IconDown";
import { Link } from "react-router-dom";

function NavElement({ linkIcon, linkText, nestedNav, linkto }) {
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
        <span className="icon">{linkIcon}</span>

        {isExpanded && (
          <Link to={linkto} className="nav-text link-primary flex">
            {isExpanded && linkText}

            {nestedNav && (
              <span onClick={handleExpandChild} className="ml-2 translate-y-1">
                <IconDown size={20} />
              </span>
            )}
          </Link>
        )}
      </li>
      {expandChild && (
        <ul className="flex flex-col border-2 bg-gray-50 p-4 ">
          {nestedNav &&
            nestedNav.map((item) => {
              return (
                <Link to={item.link} key={item.name} className="link-primary">
                  {item.name}
                </Link>
              );
            })}
        </ul>
      )}
    </>
  );
}

export default NavElement;
