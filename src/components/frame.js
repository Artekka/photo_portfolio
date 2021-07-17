import * as React from "react"

const Frame = ( {children}) => {
    return (
        <div>
            <h1>This is some data that gets passed through:</h1>
            {children}
        </div>
    )
}

export default Frame
