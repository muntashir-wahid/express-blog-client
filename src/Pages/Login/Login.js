import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logInHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  // Login handler
  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    const loginForm = event.target;
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    console.log(email, password);
    setError("");

    logInHandler(email, password)
      .then(({ user }) => {
        navigate(`/blogs/${user?.uid}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen w-full">
      <h2 className="text-center text-4xl mt-10 font-semibold">Please Login</h2>
      <div className="max-w-md my-6 mx-auto p-6 shadow-2xl rounded-xl">
        <form onSubmit={loginFormSubmitHandler} className="p-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">Or Login with</div>
          <div className="grid h-20  rounded-box place-items-center">
            <button className="btn btn-outline btn-primary">
              <FcGoogle className="mr-2 text-lg" />
              Google
            </button>
          </div>
        </div>
        <p className="text-center">
          New to Express Blog?
          <Link className="btn btn-link px-1" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
