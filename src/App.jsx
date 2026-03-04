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
        <div className="conatiner todoListPage vhContainer">
          <div className="todoList_Content">
            <div className="inputBox">
              <input type="text" placeholder="請輸入待辦事項" className="text" />
              <a href="#" className="create_todo">
                <i className="fa fa-plus"></i>
              </a>
            </div>
            <div className="todoList_list">
              <ul className="todoList_tab" id="filterTabs">
                <li>
                  <a href="#" className="active" data-status="all">
                    全部
                  </a>
                </li>
                <li>
                  <a href="#" data-status="pending">
                    待完成
                  </a>
                </li>
                <li>
                  <a href="#" data-status="completed">
                    已完成
                  </a>
                </li>
              </ul>
              <div className="todoList_items">
                <ul className="todoList_item" id="todoList"></ul>
                <div className="todoList_statistics">
                  <p>
                    <span id="completed-count">0</span> 個已完成項目
                  </p>
                  <a href="#">清除已完成項目</a>
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
