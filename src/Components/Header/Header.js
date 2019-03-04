import React from 'react';

const Header = (props) => {
    const button = props.onButtonClick
    return (
        <div>
        <button onClick={() => button()}>
            Click!
          </button>
        </div>
        
    )
}

export default Header