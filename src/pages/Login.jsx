import { useState } from "react";
import FacebookBtn from "../components/elements/FacebookBtn"
import {Link} from 'react-router-dom'

function Login() {
  const initialState = {
    email: '',
    password: ''
  }
  const [formData, setFormData] = useState(initialState)

  function updateFields(e){
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.table(formData)
    setFormData(initialState)
  }

  return (
    <div className="login container my-5">
      <div className="row rounded" style={{boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.1)'}}>
      <section className="login-bg col-md-6 d-none d-md-block animate__animated animate__backInLeft"></section>

        <section className="col-md-6 text-center py-4 animate__animated animate__backInRight">
          <img
            height={120}
            className="d-block mx-auto"
            src="assets/logo.png"
            alt=""
          />
          <p className="mb-5 mt-4 fw-bold text-decoration-underline">Login to your account</p>
          <FacebookBtn />
          <h6 className="opacity-50 my-4">__OR__</h6>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 mx-auto"
                style={{maxWidth: '300px'}}>
              <input
                value={formData.email}
                type="email"
                onChange={updateFields}
                required
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3 mx-auto"
                style={{maxWidth: '300px'}}>
              <input
                value={formData.password}
                type="password"
                onChange={updateFields}
                required
                className="form-control"
                id="password"
                placeholder="name@example.com"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn cus-btn">Login</button>
          </form>
          <p className="text-muted opacity-75 mt-5">Not have an account <Link to='/signup'>signup here</Link></p>
        </section>

      </div>
    </div>
  );
}
export default Login