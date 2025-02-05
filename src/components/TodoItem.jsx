import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";


//Template strim siempre devuelve un strim
//Operador ternario is else de una linea  ? : 

const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => { 
  const {id, title, completed} = todo;
    return(
        <article {...props} ref ={ref} className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800">
            <button className={`h-5 w-5 flex-none rounded-full border-2 ${
              completed 
                ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
                : " inline-block "}`}
                onClick={() => updateTodo(id)}
            >
              {completed && <IconCheck/>}             
            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={()=> removeTodo(id)}>
              <IconCross/>
            </button>
          </article>
    )
 }
)
 export default TodoItem;