import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import ApplyForm from './ApplyForm';

const ApplyHere = () => {
    const {loginWithPopup, user, logout} = useAuth0()

    return (
        <div className='flex flex-col items-center justify-center w-full my-20'>
        <div>
            <button onClick={() => loginWithPopup()} className='px-4 py-2 border bg-red-400 text-white shadow-sm  rounded-lg font-semibold hover:bg-red-700'>Apply with LinkedIn</button>
            {/* <button onClick={() => logout()}>Log out</button> */}
        </div>
        <div>
           <ApplyForm user ={user}></ApplyForm>
        </div>
        </div>
    );
}
 

export default ApplyHere;