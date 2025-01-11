
import Todo from "./todoComponent/Todo.jsx";
import {MyTodoProvider} from './TodoContext.jsx'
function App() {

  return (
    <MyTodoProvider>

      <Todo/>

    </MyTodoProvider>
  )
}

export default App
