// resources for regrex values
// https://www.thepolyglotdeveloper.com/2020/02/test-password-strength-regex-react-application/

import Validator from './components/Validator'
import { useState } from 'react'

const App = () => {
  const lowercase = new RegExp('^(?=.*[a-z])')
  const uppercase = new RegExp('^(?=.*[A-Z])')
  const numeric = new RegExp('^(?=.*[0-9])')
  const special = new RegExp('^(?=.*[!@#$%^&*])')
  const passSize = new RegExp('^(?=.{8,})')
  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  )

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirm, setPasswordConfirm] = useState('')
  let [final, setFinal] = useState({
    line: 'Fill out the form to sign up',

    class: 'none'
  })

  let [lower, setLower] = useState({ line: '', class: 'none' })
  let [upper, setUpper] = useState({ line: '', class: 'none' })
  let [num, setNum] = useState({ line: '', class: 'none' })
  let [spec, setSpec] = useState({ line: '', class: 'none' })
  let [size, setSize] = useState({ line: '', class: 'none' })

  const usernameChange = (event) => {
    let word = event.target.value
    setUsername(word)
  }
  const passwordChange = (event) => {
    let l = {}
    let u = {}
    let n = {}
    let spec = {}
    let si = {}
    let word = event.target.value
    setPassword(word)
    let updateFinal = {}
    if (strongRegex.test(word)) {
      updateFinal = {
        line: 'Passwords is strong enough.',
        class: 'valid'
      }
      setFinal(updateFinal)
    }

    if (!lowercase.test(word)) {
      l = {
        line: 'You need a lowercase letter',
        class: 'invalid'
      }
    } else {
      l = {
        line: '',
        class: 'none'
      }
    }
    setLower(l)
    if (!uppercase.test(word)) {
      u = {
        line: 'You need a uppercase letter',
        class: 'invalid'
      }
    } else {
      u = {
        line: '',
        class: 'none'
      }
    }
    setUpper(u)
    if (!numeric.test(word)) {
      n = {
        line: 'You need a number',
        class: 'invalid'
      }
    } else {
      n = {
        line: '',
        class: 'none'
      }
    }
    setNum(n)
    if (!special.test(word)) {
      spec = {
        line: 'You need one special character',
        class: 'invalid'
      }
    } else {
      spec = {
        line: '',
        class: 'none'
      }
    }
    setSpec(spec)
    if (!passSize.test(word)) {
      si = {
        line: 'You need at least 8 characters',
        class: 'invalid'
      }
    } else {
      si = {
        line: '',
        class: 'none'
      }
    }
    setSize(si)
  }
  const passwordConfirmChange = (event) => {
    let word = event.target.value
    setPasswordConfirm(word)
    let updateFinal = {}
    if (password === word) {
      updateFinal = { line: 'Passwords match!', class: 'valid' }
      setFinal(updateFinal)
    } else {
      updateFinal = { line: 'Passwords do not match', class: 'invalid' }
      setFinal(updateFinal)
    }
  }

  const comparePass = (event) => {
    event.preventDefault()
    let updateFinal = {}
    if (password === passwordConfirm) {
      updateFinal = { line: 'Sign up successful', class: 'valid' }
      setFinal(updateFinal)
    } else {
      updateFinal = { line: 'Sign up failed', class: 'invalid' }
      setFinal(updateFinal)
    }
  }

  const reset = () => {
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
    let updateFinal = {}
    updateFinal = {
      line: 'Fill out the form to sign up',
      class: 'none'
    }
    setFinal(updateFinal)
  }

  return (
    <Validator
      username={username}
      setUsername={usernameChange}
      password={password}
      setPassword={passwordChange}
      passwordConfirm={passwordConfirm}
      setPasswordConfirm={passwordConfirmChange}
      comparePass={comparePass}
      final={final}
      reset={reset}
      lower={lower}
      upper={upper}
      num={num}
      spec={spec}
      size={size}
    />
  )
}

export default App
