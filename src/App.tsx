import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"

function App() {
  return (
    <main>
      <h2>Todo with React + Typescript</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default App