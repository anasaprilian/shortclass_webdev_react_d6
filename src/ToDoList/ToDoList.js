import PropTypes from 'prop-types'

function ToDoList({list}){
    const checkbox = (e) => {
        const elementCheckBox = e.target;
        const title = elementCheckBox.parentNode;
        if (elementCheckBox.checked) {
            title.style.textDecoration = "line-through";
        } else {
            title.style.textDecoration = "none";
        }
    };

    const isDone = () => {
        const title = document.querySelectorAll("#title");
        title.forEach((title) => {
            if (title.style.textDecoration === "line-through") {
                title.style.display = "none";
            } else {
                title.style.display = "flex";
            }
        });
    }

    return (
        <div>
            {list.map((e) => (
                <div key={e.id}>
                    <span id="title">
                        {e.title} - {e.description}{" "}
                        <input id="checkbox" type="checkbox" onClick={checkbox}>
                        </input>
                    </span>
                 </div>
            ))}
            <button onClick={isDone}>Hapus</button>
            </div>
    );
}

ToDoList.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default ToDoList;
