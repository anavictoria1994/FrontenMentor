const TodoFilter = ({changeFilter, filter}) => { 
    return(
        <section className="container mx-auto mt-8">
            <div className="flex justify-center rounded bg-white p-4 gap-4 dark:bg-gray-800">
            <button className= {`${ filter === 'all' ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('all')}>ALL</button>
            <button className= {`${ filter === 'active' ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('active')}>Active</button>
            <button className= {`${ filter === 'completed' ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        </section>
    )
 }
export default TodoFilter;
