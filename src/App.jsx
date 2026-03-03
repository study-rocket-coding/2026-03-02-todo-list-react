import "./App.css";

function App() {
  return (
    <>
      <div id="todoListPage" className="bg-half">
        <nav>
          <h1>
            <a href="#">ONLINE TODO LIST</a>
          </h1>
          <ul>
            <li className="todo_sm">
              <a href="#">
                <span>王小明的代辦</span>
              </a>
            </li>
            <li>
              <a href="#loginPage">登出</a>
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
