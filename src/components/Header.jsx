import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="top-bar">
      <div className="border-b-k_light_gray flex h-full items-center border-b">
        <div className="logo flex h-full w-[160px] items-center  px-8 ">
          <Link to="/">
            <h1 className="text-4xl font-extrabold">VoIP</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
