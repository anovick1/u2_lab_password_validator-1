import '../styles/Validator.css'

const Validator = (props) => {
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={props.setUsername}
          value={props.username}
        />
        <label htmlFor="username">Username</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={props.setPassword}
          value={props.password}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={props.setPasswordConfirm}
          value={props.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <button type="submit" onClick={props.comparePass}>
          Sign Up
        </button>
        <button className="cancel" type="button" onClick={props.reset}>
          Reset
        </button>
        ``
        <p className={props.final.class}>{props.final.line}</p>
        <p className={props.lower.class}>{props.lower.line}</p>
        <p className={props.upper.class}>{props.upper.line}</p>
        <p className={props.num.class}>{props.num.line}</p>
        <p className={props.spec.class}>{props.spec.line}</p>
        <p className={props.size.class}>{props.size.line}</p>
      </form>
    </div>
  )
}

export default Validator
