const TodoFilter = () => { 
    return(
        <section className="container mx-auto mt-8">
            <div className="flex justify-center rounded bg-white p-4 gap-4">
            <button className="hover:text-blue-600">ALL</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
            </div>
        </section>
    )
 }
export default TodoFilter;
