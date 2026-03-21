import { useState } from "react";       // 1. React 本身
import NavBar from "./components/NavBar"; // 2. 元件
import TodoInput from "./components/TodoInput";
import TodoTabs from "./components/TodoTabs";
import TodoList from "./components/TodoList";
import "./App.css";                       // 3. 樣式

type Todo = {
  id: number
  content: string
  completed: boolean
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");

  // 新增待辦功能
  function createTodoItem(value: string) {
    setTodos([...todos, {
      id: Date.now(),
      content: value,
      completed: false
    }]);
  }

  // 切換完成狀態功能
  function toggleTodoStatus(id: number) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  // 編輯待辦功能
  function editTodoItem(e: React.MouseEvent<HTMLAnchorElement>, id: number, currentContent: string) {
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
  function deleteTodoItem(e: React.MouseEvent<HTMLAnchorElement>, id: number) {
    e.preventDefault();

    const isConfirmed = confirm("確認刪除待辦事項？");
    if (!isConfirmed) return;

    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 取得篩選後的資料
  function getFilteredData(): Todo[]  {
    return todos.filter(todo => {
      if (activeTab === "pending") return !todo.completed;
      if (activeTab === "completed") return todo.completed;
      return true;
    });
  }

  // 篩選顯示功能
  function handleTabChange(e: React.MouseEvent<HTMLAnchorElement>, status: string) {
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
            <div className=" bg-white rounded-[10px] shadow-todo">
              <TodoTabs activeTab={activeTab} onTabChange={handleTabChange} />
              <TodoList
                // 資料流從右到左，從父到子
                todos={todos}
                filteredTodos={getFilteredData()} // 有 () — 傳的是函式執行後的結果，需要執行函式才能拿到陣列
                onToggle={toggleTodoStatus}   // 傳函式本身，不加 ()
                onEdit={editTodoItem}         // 傳函式本身，不加 ()
                onDelete={deleteTodoItem}     // 傳函式本身，不加 ()
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
