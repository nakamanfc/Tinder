import React, {useState,useEffect} from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn'; 
import './WindowLg.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

function WindowLg({login,close}) {
    const [signIn,setSignIn] = useState(true);
    const signInClick = () => {
        setSignIn(!signIn)
    }

    return (
        <div className={login ? 'activeWindow' : 'nonActiveWindow'}>
            <div className='bg-modal'>
                <div className='modal-content'>
                    <div className='exitIcon' onClick={close}>
                        <Link>
                            <CloseIcon/>
                        </Link>
                    </div>
                    <div className={signIn ? 'nonActivesignUp' : 'activesignUp'}>
                        <SignUp clickToSignIn={signInClick}/>
                    </div>
                    <div className={signIn ? 'activesignIn' : 'nonActivesignIn'}>
                        <SignIn clickToSignUp={signInClick}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default WindowLg