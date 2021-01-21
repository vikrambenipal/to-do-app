import React, { useState } from 'react'

const Input = () => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }
    
    return (
        <div>
            <form>
                <input type="text" name="text" 
                placeholder="Enter Task..." 
                value={text || ""}
                onChange={onChange}/>
                <input type="submit" />
            </form>
            {console.log(text)}
        </div>
        
    )
}

export default Input;
