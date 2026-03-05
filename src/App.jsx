import { useState } from "react";       // 1. React 本身
import NavBar from "./components/NavBar"; // 2. 元件
import TodoInput from "./components/TodoInput";
import "./App.css";                       // 3. 樣式

function App() {

  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // 新增待辦功能
  function createTodoItem(value) {
    setTodos([...todos, {
      id: Date.now(),
      content: value,
      completed: false
    }]);
  }

  // 切換完成狀態功能
  function toggleTodoStatus(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  // 編輯待辦功能
  function editTodoItem(e, id, currentContent) {
    e.preventDefault();

    const newContent = prompt("請輸入新的內容", currentContent);

    if (newContent === null) return; // 按取消
    if (!newContent.trim()) { alert("請輸入內容"); return; }
    if (newContent.length > 50) { alert("內容不能超過 50 字"); return; }

    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, content: newContent.trim() } : todo
    ));
  }

  // 刪除待辦功能
  function deleteTodoItem(e, id) {
    e.preventDefault();

    const isConfirmed = confirm("確認刪除待辦事項？");
    if (!isConfirmed) return;

    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 取得篩選後的資料
  function getFilteredData() {
    return todos.filter(todo => {
      if (activeTab === "pending") return !todo.completed;
      if (activeTab === "completed") return todo.completed;
      return true;
    });
  }

  // 篩選顯示功能
  function handleTabChange(e, status) {
    e.preventDefault();
    setActiveTab(status);
  }

  return (
    <>
      <div id="todoListPage" className="bg-half-yellow max-sm:bg-full-yellow">
        <NavBar username="王小明" />
        <div className="my-0 mx-auto py-[87px] px-8 max-sm:py-4 h-screen">
          <div className="w-[500px] my-0 mx-auto max-sm:w-full">
            <TodoInput onCreateTodo={createTodoItem} />
            <div className="todoList_list bg-white rounded-[10px] shadow-todo">
              <ul className="todoList_tab flex justify-evenly">
                <li className="w-full">
                  <a href="#" className={`block no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid ${activeTab === "all" ? "text-[#333333] border-[#333333]" : "text-brand-gray border-[#efefef]"}`} onClick={(e) => handleTabChange(e, "all")}>
                    全部
                  </a>
                </li>
                <li className="w-full">
                  <a href="#" className={`block no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid ${activeTab === "pending" ? "text-[#333333] border-[#333333]" : "text-brand-gray border-[#efefef]"}`} onClick={(e) => handleTabChange(e, "pending")}>
                    待完成
                  </a>
                </li>
                <li className="w-full">
                  <a href="#" className={`block no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid ${activeTab === "completed" ? "text-[#333333] border-[#333333]" : "text-brand-gray border-[#efefef]"}`} onClick={(e) => handleTabChange(e, "completed")}>
                    已完成
                  </a>
                </li>
              </ul>
              <div className="todoList_items pt-[23px] pl-[24px] pr-[17px] pb-[32px]">
                <ul className="todoList_item mb-2 max-h-[280px] overflow-y-auto has-[.no-data]:overflow-y-hidden">
                  {todos.length === 0 ? (
                    <li className="flex items-center justify-center min-h-[280px]">
                      <p>目前尚無待辦事項</p>
                    </li>
                  ) : (
                    getFilteredData().map((todo) => (
                      <li key={todo.id} className="flex items-center mb-[17px]">
                        <label className="w-full flex items-center border-b border-solid border-[#e5e5e5] pb-[15px] text-brand-dark leading-[20.27px]">
                          <input
                            className="peer w-5 h-5 border-b border-solid border-brand-gray rounded-[5px] mr-4"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodoStatus(todo.id)}
                          />
                          <span className="peer-checked:text-[#9f9a91] peer-checked:line-through transition-all duration-[400ms] ease-in-out">
                            {todo.content}
                          </span>
                        </label>
                        <div className="flex opacity-0 hover:opacity-100">
                          <a href="#" className="text-xl/5 ml-[17px] mr-2 mb-2 block p-1 text-brand-dark" onClick={(e) => editTodoItem(e, todo.id, todo.content)}>
                            <i className="fa fa-edit"></i>
                          </a>
                          <a href="#" className="text-xl/5 ml-[17px] mr-2 mb-2 block p-1 text-brand-dark" onClick={(e) => deleteTodoItem(e, todo.id)}>
                            <i className="fa fa-times"></i>
                          </a>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
                <div className="todoList_statistics flex justify-between">
                  <p className="text-brand-dark text-sm">
                    <span>{todos.filter(todo => todo.completed).length}</span> 個已完成項目
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
