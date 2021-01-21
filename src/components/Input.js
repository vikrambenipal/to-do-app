import React from 'react'

const Input = ( { onHandleText, onHandleSubmit, text }) => {

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="text" 
                placeholder="Enter Task..." 
                onChange={onHandleText}
                value={text}
                />
                <input
                type="submit"
                value="search" />
            </form>
        </div>
        
    )
}

export default Input;
