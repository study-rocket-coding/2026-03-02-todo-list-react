type TodoTabsProps = {
  activeTab: string;
  onTabChange: (e: React.MouseEvent<HTMLAnchorElement>, key: string) => void;
}

const tabs = [
  { key: "all",       label: "全部" },
  { key: "pending",   label: "待完成" },
  { key: "completed", label: "已完成" },
];

const baseClass = "block no-underline leading-5 font-bold text-center p-4 border-b-2 border-solid";
const activeClass = "text-[#333333] border-[#333333]";
const inactiveClass = "text-brand-gray border-[#efefef]";

function TodoTabs({ activeTab, onTabChange }: TodoTabsProps) {
  return (
    <>
      <ul className="flex justify-evenly">
        {tabs.map((tab) => (
          <li key={tab.key} className="w-full">
            <a href="#" className={`${baseClass} ${activeTab === tab.key ? activeClass : inactiveClass}`} onClick={(e) => onTabChange(e, tab.key)}>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoTabs;