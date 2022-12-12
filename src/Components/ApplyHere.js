import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const ApplyHere = () => {
    const {loginWithPopup} = useAuth0()
    return (
        <div>
            <button onClick={() => loginWithPopup()}>Apply with LinkedIn</button>
            
        </div>
    );
};

export default ApplyHere;