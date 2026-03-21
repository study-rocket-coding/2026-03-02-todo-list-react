import logoImg from "../assets/logoImg.png";

type NavBarProps =  {
  username: string
}

function NavBar({ username }: NavBarProps) {
  return (
    <>
      <nav className="flex justify-between items-center pt-6 px-8 max-sm:mb-4">
        <h1>
          <a
            href="#"
            className="
              block
              w-[243px]
              h-[39px]
              bg-no-repeat
              bg-center
              bg-contain
              indent-[101%]
              overflow-hidden
              whitespace-nowrap
            "
            style={{ backgroundImage: `url(${logoImg})` }}>
            ONLINE TODO LIST
          </a>
        </h1>
        <ul className="flex">
          <li className="max-sm:hidden">
            <a href="#" className="no-underline text-brand-dark ml-6 hover:text-brand-orange">
              <span className="font-bold">{username} 的代辦</span>
            </a>
          </li>
          <li className="max-sm:mt-[11px]">
            <a href="#loginPage" className="no-underline text-brand-dark ml-6 max-sm:ml-0 hover:text-brand-orange">
              登出
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;