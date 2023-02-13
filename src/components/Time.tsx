import Times from './Times'

import React from 'react'

function Time(props: any) {

    return (
        <div className="time">
            {props.showTime ? <Times date={props.date}/> : null}
        </div>
    )
}

export default Time;