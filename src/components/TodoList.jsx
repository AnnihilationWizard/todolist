import React, { useState } from 'react'; // 移除未使用的 useEffect

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // 新增一個待辦事項
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const now = new Date();
      const newItem = {
        id: Date.now(),
        text: newTodo,
        date: now.toISOString().split('T')[0], // 取得 YYYY-MM-DD 格式的日期
        completed: false
      };
      setTodos([...todos, newItem]);
      setNewTodo('');
    }
  };

  // 刪除待辦事項
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 開始編輯待辦事項
  const handleEditStart = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  // 完成編輯待辦事項
  const handleEditSave = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editingText } : todo
    ));
    setEditingId(null);
    setEditingText('');
  };

  // 切換待辦事項的完成狀態
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 處理鍵盤按下事件
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">待辦事項清單</h1>

      {/* 輸入新的待辦事項 */}
      <div className="flex items-center justify-center mb-6"> {/* 加入 justify-center */}
        <input
          type="text"
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="新增待辦事項..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors"
          onClick={handleAddTodo}
        >
          新增
        </button>
      </div>

      {/* 待辦事項列表 */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-center p-4 mb-3 bg-white rounded-lg shadow-md transition-all duration-300 ${todo.completed ? 'opacity-60 line-through' : ''}`} // 替換 justify-between 為 justify-center
          >
            {editingId === todo.id ? (
              // 編輯模式
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-grow px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  autoFocus
                />
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors"
                  onClick={() => handleEditSave(todo.id)}
                >
                  儲存
                </button>
              </div>
            ) : (
              // 顯示模式
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="mr-3 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                  <div className="flex flex-col">
                    <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {todo.text}
                    </span>
                    <span className="text-xs text-gray-500">
                      {todo.date}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEditStart(todo)}
                  >
                    編輯
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    刪除
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          目前沒有待辦事項
        </div>
      )}
    </div>
  );
};

export default TodoList;
