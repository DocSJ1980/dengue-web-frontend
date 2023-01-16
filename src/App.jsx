import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
// import Welcome from './features/auth/Welcome'
// import Prefetch from './features/auth/Prefetch'
// import PersistLogin from './features/auth/PersistLogin'
import usePersist from './hooks/usePersist';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './features/auth/authSlice';
import { useEffect, useRef, useState } from 'react';
import { useRefreshMutation } from './features/auth/authApiSlice';
import Loading from './components/loader';


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
    console.log('verifying refresh token useffect running', token, persist)

    if (effectRan.current === true) {
      console.log('verifying refresh token effectRan.current')

      const verifyRefreshToken = async () => {
        console.log('verifying refresh token tryCatch running')
        try {
          await refresh()
          setTrueSuccess(true)
        }
        catch (err) {
          console.error(err)
        }
      }

      if (!token && persist) verifyRefreshToken()
    }

    return () => {
      console.log("EffectRan: ", effectRan.current, token, persist)
      effectRan.current = true
      console.log("EffectRan: ", effectRan.current)
    }
  }, [])
  let content
  if (isLoading) {
    content = <Loading />
  } else {
    content =
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={(token != null && !isLoading) ? (<Navigate to="/welcome" replace />) : (<Login />)} />
          <Route path="/welcome" element={(token === null && !isLoading) ? (<Navigate to="/login" replace />) : (<DashLayout />)} />
        </Routes >
      </div>

  }

  return content

}

export default App;
