
const TodoComputed = ({countItem, clearCompleted}) => { 
    return(
        <section className="flex justify-between bg-white py-4 px-4 rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400"> {countItem} items left</span>
            <button className="text-gray-400" onClick={clearCompleted} > Clear Completed</button>
        </section>
    )
 }

export default TodoComputed;