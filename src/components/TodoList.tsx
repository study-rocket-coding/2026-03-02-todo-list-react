import { useEffect } from "react";

type Todo = {
  id: number;
  content: string;
  completed: boolean;
}

type TodoListProps = {
  todos: Todo[]
  filteredTodos: Todo[]
  onToggle: (id: number) => void
  onEdit: (e: React.MouseEvent<HTMLAnchorElement>, id: number, content: string) => void
  onDelete: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void
}

function TodoList({ todos, filteredTodos, onToggle, onEdit, onDelete }: TodoListProps) {

  useEffect(() => {
    console.log("todos 更新了，目前共", todos.length, "筆");
  }, [todos]); // todos 變化時才執行

  return (
    <div className="pt-[23px] pl-[24px] pr-[17px] pb-[32px]">
      <ul className="mb-2 max-h-[280px] overflow-y-auto has-[.no-data]:overflow-y-hidden">
        {filteredTodos.length === 0 ? (
          <li className="flex items-center justify-center min-h-[280px]">
            <p>目前尚無待辦事項</p>
          </li>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="flex items-center mb-[17px]">
              <label className="w-full flex items-center border-b border-solid border-[#e5e5e5] pb-[15px] text-brand-dark leading-[20.27px]">
                <input
                  className="peer w-5 h-5 border-b border-solid border-brand-gray rounded-[5px] mr-4"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
                <span className="peer-checked:text-[#9f9a91] peer-checked:line-through transition-all duration-[400ms] ease-in-out">
                  {todo.content}
                </span>
              </label>
              <div className="flex opacity-0 hover:opacity-100">
                <a href="#" className="text-xl/5 ml-[17px] mr-2 mb-2 block p-1 text-brand-dark" onClick={(e) => onEdit(e, todo.id, todo.content)}>
                  <i className="fa fa-edit"></i>
                </a>
                <a href="#" className="text-xl/5 ml-[17px] mr-2 mb-2 block p-1 text-brand-dark" onClick={(e) => onDelete(e, todo.id)}>
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="flex justify-between">
        <p className="text-brand-dark text-sm">
          <span>{todos.filter(todo => todo.completed).length}</span> 個已完成項目
        </p>
        <a href="#" className="text-brand-gray text-sm no-underline">清除已完成項目</a>
      </div>
    </div>
  );
}

export default TodoList;