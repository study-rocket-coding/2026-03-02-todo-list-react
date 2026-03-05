import "./App.css";
import logoImg from "./assets/logoImg.png";

function App() {
  return (
    <>
      <div id="todoListPage" className="bg-half-yellow max-sm:bg-full-yellow">
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
                <span className="font-bold">王小明的代辦</span>
              </a>
            </li>
            <li className="max-sm:mt-[11px]">
              <a href="#loginPage" className="no-underline text-brand-dark ml-6 max-sm:ml-0 hover:text-brand-orange">
                登出
              </a>
            </li>
          </ul>
        </nav>
        <div className="my-0 mx-auto py-[87px] px-8 max-sm:py-4 h-screen">
          <div className="w-[500px] my-0 mx-auto max-sm:w-full">
            <div className="inputBox w-full flex relative mb-4 shadow-todo">
              <input type="text" placeholder="請輸入待辦事項" className="bg-white border-0 rounded-[10px] relative w-full h-[47px] pl-4" />
              <a href="#" className="create_todo block w-10 h-[39px] absolute bg-brand-dark text-white text-xl/5 no-underline text-center rounded-[10px] top-1 right-1 p-[10px]">
                <i className="fa fa-plus"></i>
              </a>
            </div>
            <div className="todoList_list bg-white rounded-[10px] shadow-todo">
              <ul className="todoList_tab flex justify-evenly" id="filterTabs">
                <li className="w-full">
                  <a href="#" className="active block text-brand-gray no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid border-[#efefef]" data-status="all">
                    全部
                  </a>
                </li>
                <li className="w-full">
                  <a href="#" className="block text-brand-gray no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid border-[#efefef]" data-status="pending">
                    待完成
                  </a>
                </li>
                <li className="w-full">
                  <a href="#" className="block text-brand-gray no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid border-[#efefef]" data-status="completed">
                    已完成
                  </a>
                </li>
              </ul>
              <div className="todoList_items pt-[23px] pl-[24px] pr-[17px] pb-[32px]">
                <ul className="todoList_item mb-2 max-h-[280px] overflow-y-auto has-[.no-data]:overflow-y-hidden" id="todoList">
                  <li className="flex items-center mb-[17px]">
                    <label className="w-full flex items-center border-b border-solid border-[#e5e5e5] pb-[15px] text-brand-dark leading-[20.27px]">
                        <input className="peer w-5 h-5 border-b border-solid border-brand-gray rounded-[5px] mr-4" type="checkbox" value="true" />
                        <span className="peer-checked:text-[#9f9a91] peer-checked:line-through transition-all duration-[400ms] ease-in-out">把冰箱發霉的檸檬拿去丟</span>
                    </label>
                    <a href="#" className="text-xl/5 ml-[17px] mr-2 mb-2 block p-1 text-brand-dark opacity-0 hover:opacity-100">
                        <i className="fa fa-times"></i>
                    </a>
                  </li>
                </ul>
                <div className="todoList_statistics flex justify-between">
                  <p className="text-brand-dark text-sm">
                    <span id="completed-count">0</span> 個已完成項目
                  </p>
                  <a href="#" className="text-brand-gray text-sm no-underline">清除已完成項目</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
