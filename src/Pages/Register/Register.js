import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Context
  const { createUserHandler } = useContext(AuthContext);
  // console.log(createUserHandler);

  // Check if tarms is accepted
  const checkInputRef = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const checkedChangeHandler = () => {
    setIsChecked(checkInputRef.current.checked);
  };

  // ------------------------- //
  // Registration from Handler
  // ------------------------- //

  const registerFormSubmitHandler = (event) => {
    event.preventDefault();

    // Collect from value upon form submission

    const registerForm = event.target;
    const displayName = registerForm.fullName.value;
    const photoURL = registerForm.photoURL.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    // console.log(displayName, photoURL, email, password);

    createUserHandler(email, password)
      .then(({ user }) => {
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen w-full">
      <h2 className="text-center text-4xl mt-10 font-semibold">
        Please Register
      </h2>
      <div className="max-w-lg  mx-auto p-6 my-6 shadow-2xl rounded-xl">
        <form onSubmit={registerFormSubmitHandler} className="p-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fullname</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="fullname"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photo url"
              className="input input-bordered"
            />
          </div>
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
          </div>
          <div className="flex">
            <label className="label cursor-pointer">
              <input
                onChange={checkedChangeHandler}
                ref={checkInputRef}
                type="checkbox"
                className="checkbox checkbox-primary"
              />
            </label>
            <span className="label-text">
              Accept our
              <Link to="/terms-and-conditions" className="btn btn-link p-1">
                Terms and Conditions
              </Link>
            </span>
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <div className="form-control mt-6">
            {isChecked ? (
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            ) : (
              <button className="btn" disabled>
                Login
              </button>
            )}
          </div>
        </form>
        <p className="text-center">
          Already have an Account?
          <Link className="btn btn-link px-1" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
