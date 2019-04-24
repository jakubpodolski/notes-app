import React from 'react';

const UserPanel = ({match}) => {
    const user = match.params.username;

    return (
        <div style={{ backgroundColor: 'red' }}>
            {`Hello ${match.params.username}`}
        </div>
    )
}

export default UserPanel;