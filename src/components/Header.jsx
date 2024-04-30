import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex h-full w-full items-center justify-between border-b border-b-k_light_gray">
      <div className="flex-shrink-0 grow-0  px-8">
        <Link to="/">
          <h1 className="text-4xl font-extrabold">VoIP</h1>
        </Link>
      </div>
      <div className="header-menu flex flex-grow justify-between px-4">
        <div>Input</div>
        <div className="flex basis-3/4 justify-around">
          <div>Box 1</div>
          <div>Box 2</div>
          <div>Box 3</div>
          <div>Box 4</div>
        </div>
        <button className="hover:bg-k_blue_hover bg-k_blue">Button</button>
      </div>
    </div>
  );
}

export default Header;
