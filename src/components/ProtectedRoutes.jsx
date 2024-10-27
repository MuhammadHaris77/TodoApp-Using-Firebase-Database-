import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/config';
import Spinner from './Spinner';

const ProtectedRoutes = ({ component }) => {

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setLoading(false)
                // ...
            } else {
                navigate('/login')
            }
        });

    }, [])

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    return (
        loading ? <Spinner/> : component

    )
}

export default ProtectedRoutes