import React from 'react';
import { useSelector } from 'react-redux';

const LoadingSpinner = () => {
    const loaderState = useSelector(state => state?.spinner);
    return (
        <div>
            {/* {
                loaderState?.showSpinner ? <CircularProgress /> : null
            } */}
            {/* {
                loaderState?.showSpinner ?
                    <div class="loader"></div>
                    : null
            } */}
            {
                loaderState?.showSpinner ?
                    <div className="ringSpin">Loading..!
                        <span></span>
                    </div>
                    : null
            }
        </div>
    )
}

export default LoadingSpinner