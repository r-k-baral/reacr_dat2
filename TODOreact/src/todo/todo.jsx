import './todo.css'

export const Todo = () => {
    return(
        <section className="header">
            <h1>
                TODO LIST
            </h1>
            <section className='form'>
                <form >
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' />
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'> Add task
                            
                        </button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Todo