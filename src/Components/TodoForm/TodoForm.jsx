import './TodoForm.css'

const TodoForm = () => {


    // const [text, setText] = useState("");

    // const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        // e.preventDefault();

        // dispatch(addNewTodo(text));

        // setText('');
        console.log(e)
    }

    const onInputChange = (e) => {
        // setText(e.target.value);
        console.log(e)
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                // value={text}
            />
        </form>
    );
};

export default TodoForm;