import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex h-full items-center border-b border-b-k_light_gray">
      <div className="logo flex h-full w-[160px] items-center  px-8 ">
        <Link to="/">
          <h1 className="text-4xl font-extrabold">VoIP</h1>
          <div>Testing git 23</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
