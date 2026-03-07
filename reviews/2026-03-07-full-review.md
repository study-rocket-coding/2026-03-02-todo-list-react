# Full Project Code Review (af2c6037..HEAD)

本報告針對專案從初始化到目前功能完備的所有變更進行審閱，並標註具體建議之對應位置。

## 1. 專案架構與 React 最佳實踐
*   **元件拆分優點**：
    *   **描述**：成功將單一檔案重構為多個職責明確的元件。
    *   **對應位置**：`src/App.jsx:2-5` (元件導入)
*   **狀態更新安全 (Functional Update)**：
    *   **建議**：當 `setTodos` 依賴於目前的 `todos` 狀態時，應使用 functional update 模式以避免閉包問題。
    *   **對應位置**：
        *   `src/App.jsx:15`：`setTodos([...todos, ...])`
        *   `src/App.jsx:24`：`setTodos(todos.map(...))`
        *   `src/App.jsx:39`：`setTodos(todos.map(...))`
        *   `src/App.jsx:51`：`setTodos(todos.filter(...))`
    *   **改善方案**：建議改為 `setTodos(prevTodos => prevTodos.map(...))`。
*   **移除開發 Debug 資訊**：
    *   **建議**：移除不必要的 `console.log`。
    *   **對應位置**：
        *   `src/components/TodoList.jsx:6`
        *   `src/components/TodoTabs.jsx:13`

## 2. 使用者體驗 (UI/UX)
*   **自動 Focus 優化**：
    *   **優點**：在 `TodoInput` 中使用了 `useRef` 與 `useEffect` 實作自動 Focus，顯著提升了輸入的流暢度。
    *   **對應位置**：`src/components/TodoInput.jsx:8-10, 21`
*   **彈窗互動限制**：
    *   **建議**：目前使用原生 `window.prompt` 與 `window.confirm`。
    *   **對應位置**：`src/App.jsx:33, 48`
    *   **說明**：原生彈窗會阻塞瀏覽器執行緒且無法客製化 UI，建議未來實作自定義的 Modal 元件。

## 3. 輔助功能與語義化 (Accessibility)
*   **標籤誤用 (Semantic HTML)**：
    *   **描述**：許多僅執行點擊動作（無跳轉頁面）的元素使用了 `<a>` 標籤並配上 `href="#"`。
    *   **對應位置**：
        *   `src/components/NavBar.jsx:9` (Logo 連結)
        *   `src/components/TodoInput.jsx:35` (新增按鈕)
        *   `src/components/TodoList.jsx:31, 34, 46` (編輯、刪除、清除按鈕)
        *   `src/components/TodoTabs.jsx:21` (Tab 切換)
    *   **建議**：應改用 `<button type="button">`。這對螢幕閱讀器與鍵盤操作者（a 標籤需要 href 才有 focus）較友善。

## 4. 樣式與配置 (Tailwind CSS)
*   **設計系統優點**：
    *   **描述**：在 `tailwind.config.js` 定義了品牌色彩、字體與漸層，代碼中不再出現 Magic Hex Codes。
    *   **對應位置**：`tailwind.config.js:8-28`
*   **自定義 Breakpoint**：
    *   **建議**：設定了 `sm: '576px'`。
    *   **對應位置**：`tailwind.config.js:7`
    *   **說明**：這覆蓋了 Tailwind 預設的 `640px`，請確認此設定與設計稿一致。

## 總結
目前的程式碼結構清晰且維護性高。**最高優先級建議是將非連結用途的 `<a>` 標籤替換為 `<button>`**，以符合 Web 標準與無障礙需求。
