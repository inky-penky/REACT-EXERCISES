import React from 'react'

const Content = ({ parts, exercises })  => {
    return (
        <div>
            <p>
                {parts} {exercises}
            </p>
        </div>
    )
}
 
export default Content;