import { useState, useRef, useEffect } from "react";

type TodoInputProps =  {
  onCreateTodo: (value: string) => void;
}

function TodoInput({ onCreateTodo }: TodoInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 第一次 render 完後，自動 focus 到 input
  useEffect(() => {
    inputRef.current?.focus();
  }, []); // [] 代表只在第一次 render 後執行一次

  function handleCreate() {
    if (!inputValue.trim()) {
      alert("請輸入內容");
      return;
    }

    onCreateTodo(inputValue.trim()); // 把值往上傳給 App
    setInputValue("");

    inputRef.current?.focus(); // 新增完後重新 focus
  }

  return (
    <>
      <div className="inputBox w-full flex relative mb-4 shadow-todo">
        <input
          ref={inputRef}
          type="text"
          placeholder="請輸入待辦事項"
          className="bg-white border-0 rounded-[10px] relative w-full h-[47px] pl-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <a href="#" className="create_todo block w-10 h-[39px] absolute bg-brand-dark text-white text-xl/5 no-underline text-center rounded-[10px] top-1 right-1 p-[10px]" onClick={handleCreate}>
          <i className="fa fa-plus"></i>
        </a>
      </div>
    </>
  );
}

export default TodoInput;