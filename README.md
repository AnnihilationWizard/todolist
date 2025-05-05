# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Todo 待辦事項清單應用程式

### 功能
1. **新增待辦事項** - 使用者可以輸入新的待辦事項並按 Enter 或點擊「新增」按鈕來新增項目。
2. **列表顯示** - 所有待辦事項會顯示在清單中，包含西元日期（YYYY-MM-DD 格式）。
3. **編輯功能** - 點擊「編輯」按鈕可以修改待辦事項的內容。
4. **刪除功能** - 點擊「刪除」按鈕可以移除待辦事項。
5. **完成標記** - 使用者可以勾選核取方塊標記待辦事項為已完成狀態。

### 技術實現
* 使用 React 搭配 Vite 建構的現代化前端應用。
* 使用 Tailwind CSS 實現美觀的使用者介面。
* 使用 React Hooks (useState) 管理應用程式狀態。

### UI 特色
* 漸層背景設計。
* 卡片式清單項目，具有陰影效果。
* 已完成的待辦事項會顯示刪除線。
* 簡潔的輸入區域和按鈕設計。
