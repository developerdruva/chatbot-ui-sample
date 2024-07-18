import React from 'react'
import { useState } from 'react'
import LoadingSpinner from '../common/commonComps/LoadingSpinner';

const withLoader = (WrapComponent) => {
    return () => {
        const [loading, setLoading] = useState(true);

        setTimeout(() => {
            setLoading(false)
        }, 2000);

        return (
            <div>{loading ? <LoadingSpinner show={true}/>: <WrapComponent loading={loading} />}</div>
        )
    }
}

export default withLoader