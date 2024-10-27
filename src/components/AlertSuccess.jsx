import React from 'react'

const AlertSuccess = ({alert}) => {
    return (
        <div>
            <div class="alert alert-success" role="alert">
                {alert}
            </div>
        </div>
    )
}

export default AlertSuccess