import * as React from 'react'
import Greeting from '../components/greeting'

const SayHello = () => {
    return (
        <div>
            <Greeting name="Arthur"></Greeting>
            <Greeting name="Omar"></Greeting>
            <Greeting name="Dorna"></Greeting>
        </div>
    )
}

export default SayHello