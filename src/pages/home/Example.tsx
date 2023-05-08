import { useState } from "react";

function Example() {
    const [text, setText] = useState('');
    const [select, setSelect] = useState('');
    const [active, setActive] = useState(false);

    function validate() {
        if (!text || text.length < 4) {
            console.log('textarea is invalid');
        }
    }

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value=""></option>
            </select>

            <input
                type="checkbox"
                checked={active}
                onChange={() => setActive(!active)}
            />

            <button
                onClick={validate}
            >Click Me</button>
        </div>
    );
}

export default Example;























