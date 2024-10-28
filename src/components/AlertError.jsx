import React from 'react'

const AlertError = ({alert}) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {alert}
            </div>
        </div>
    )
}

export default AlertError