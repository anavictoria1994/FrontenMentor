import {  Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => { 
    return (
      <Droppable droppableId= "todos">
        {(droppableProvider) => (
            <div 
            ref = {droppableProvider.innerRef}
            {...droppableProvider.droppableProps}  
            className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4 dark:bg-gray-800"
            >
            {todos.map((todo, index)=>(
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>

                {
                  (droppableProvider) => (
                    <TodoItem 
                    todo={todo} 
                    removeTodo={removeTodo} 
                    updateTodo={updateTodo}
                    ref ={droppableProvider.innerRef}
                    {...droppableProvider.dragHandleProps}
                    {...droppableProvider.draggableProps}
                    />
                  )
                }
                
              </Draggable>
            ))}

            {droppableProvider.placeholder}

            </div>
          )}

      </Droppable>
    )
 }

 export default TodoList;