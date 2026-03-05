import { useEffect } from "react";

// 全大寫 → 常數，不會變化
const TABS = [
  { key: "all",       label: "全部" },
  { key: "pending",   label: "待完成" },
  { key: "completed", label: "已完成" },
];

function TodoTabs({ activeTab, onTabChange }) {

  useEffect(() => {
    console.log("目前 tab：", activeTab);
  }, [activeTab]); // activeTab 變化時才執行

  return (
    <>
      <ul className="flex justify-evenly">
        {TABS.map((tab) => (
          <li key={tab.key} className="w-full">
            <a href="#" className={`block no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid ${activeTab === tab.key ? "text-[#333333] border-[#333333]" : "text-brand-gray border-[#efefef]"}`} onClick={(e) => onTabChange(e, tab.key)}>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoTabs;