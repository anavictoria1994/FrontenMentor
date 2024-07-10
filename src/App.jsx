import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id:1,
    title:"Complite online Javascript",
    completed: true,
  },
  {
    id:2,
    title:"Go to the gym",
    completed: true,
  },

  {
    id:3,
    title:"10 minutos meditation",
    completed: false,
  },
  {
    id:4,
    title:"Pick up groceries",
    completed: false,
  },
  {
    id:5,
    title:"Complete todo app on Frontend mentor",
    completed: false,
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title:title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const countItem = todos.filter((todo) => !todo.completed).length;
  
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  };

  const [filter, setFilter] = useState("all");
  const changeFilter =(filter) => setFilter(filter);

  const filteredTodos = () =>{
      switch(filter){
        case "all":
          return todos;
        case "active":
          return todos.filter((todo)=> !todo.completed);
        case "completed":
          return todos.filter((todo)=> todo.completed);
        default:
          return todos;
      }
  };
  return (
    <div className="dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
      <Header/>

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo ={createTodo}/>
        <TodoList 
        todos={filteredTodos()} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
        />

        <TodoComputed 
        countItem={countItem}
        clearCompleted={clearCompleted} 
        />
        
        <TodoFilter changeFilter={changeFilter} filter={filter}/>  
      </main>
      <footer className="dark:text-gray-400 text-center mt-8">Drag and drop to reorder list</footer>
      
    </div>
    
  )
}

export default App;
