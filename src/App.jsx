import TodoList from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 py-8 flex items-center justify-center">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Todo 應用程式</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
