import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
//. import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import usePersist from './hooks/usePersist';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './features/auth/authSlice';
import { useEffect, useRef, useState } from 'react';
import { useRefreshMutation } from './features/auth/authApiSlice';


function App() {
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const [trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, {
    isUninitialized,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useRefreshMutation()


  useEffect(() => {

    if (effectRan.current === true
      // || process.env.NODE_ENV !== 'development'
    ) { // React 18 Strict Mode

      console.log('verifying refresh token')
      const verifyRefreshToken = async () => {
        try {
          //const response = 
          await refresh()
          console.log('verifying refresh token')
          //const { accessToken } = response.data
          setTrueSuccess(true)
        }
        catch (err) {
          console.error(err)
        }
      }

      if (!token && persist) verifyRefreshToken()
    }

    return () => effectRan.current = true

    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={token != null ? (<Navigate to="/welcome" replace />) : (<Login />)} />
        <Route path="/welcome" element={token === null ? (<Navigate to="/login" replace />) : (<DashLayout />)} />
      </Routes >
    </div>
  );
}

export default App;
