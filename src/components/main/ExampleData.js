import React, { useState } from 'react'
import withLoader from '../utils/withLoader'

const ExampleData = ({loading}) => {
    const [sampleData, setSampleData] = useState({
        name: 'Rajesh',
        email: 'developer.rajeshnuz@gmail.com'
    })

    return (
        <div>
            <p>Name: {sampleData?.name}</p>
            <p>Email: {sampleData?.email}</p>
            {JSON.stringify(loading)}
        </div>
    )
}

export default withLoader(ExampleData)