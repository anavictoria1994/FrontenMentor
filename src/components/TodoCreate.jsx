import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');
  
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    //const title = e.target.elements.title.value.trim();
    if(!title.trim()){
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };

    return(
        <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 flex gap-4 overflow-hidden bg-white rounded-md py-3 items-center px-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input 
          type="text" 
          className="dark:bg-gray-800 w-full text-gray-400 outline-none"
          placeholder="Create a new todo..."
          value ={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    )
}

export default TodoCreate;