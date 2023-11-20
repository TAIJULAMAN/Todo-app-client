
import './App.css'
import Header from './Components/Header/Header'
import TodoForm from './Components/TodoForm/TodoForm'
import Todos from './Components/Todos/Todos'

function App() {

  return (

    <div className="overflow-hidden" >
<Header></Header>
<TodoForm></TodoForm>
<Todos></Todos>
    </div>

  )
}

export default App
