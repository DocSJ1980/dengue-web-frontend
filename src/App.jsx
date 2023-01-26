import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import { selectCurrentToken, selectPersist } from './features/auth/authSlice';
import { useEffect, useRef, useState } from 'react';
import { useRefreshMutation } from './features/auth/authApiSlice';
import Loading from './components/loader';
import { Box, createTheme, ThemeProvider, } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectMode } from './features/auth/authSlice';



function App() {
  const persist = useSelector(selectPersist)
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)
  const mode = useSelector(selectMode)

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#006600"
      },
      secondary: {
        main: "#00ff00"
      },
    },
  });
  const [refresh, {
    isUninitialized,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useRefreshMutation()


  useEffect(() => {
    if (effectRan.current === true) return
    if (effectRan.current === false) {
      const verifyRefreshToken = async () => {
        try {
          await refresh()
        }
        catch (err) {
          console.error(err)
        }
      }
      if (!token && persist) {
        console.log('No token running verifyRefreshToken')
        verifyRefreshToken()
      }
      return () => {
        effectRan.current = true
        console.log('Token present logging in')
      }
    }

  }, [])

  let content
  if (isLoading) {
    content = <Loading />
  } else {
    content =
      <div className="App">
        <ThemeProvider theme={darkTheme} >
          <Box bgcolor={"background.default"} color={"text.primary"} height="100%" minHeight="100vh">
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={(token != null && !isLoading) ? (<Navigate to="/welcome" replace />) : (<Login />)} />
              <Route path="/welcome" element={(token === null && !isLoading) ? (<Navigate to="/login" replace />) : (<DashLayout />)} />
            </Routes >
          </Box>
        </ThemeProvider>
      </div>

  }

  return content

}

export default App;
