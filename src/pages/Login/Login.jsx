import React from "react";
import LottiesLogin from "../../assets/lotties/login.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";

const Login = () => {
  const { loginUser } = UseAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //   login user
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              animationData={LottiesLogin}
              loop={true}
              style={{ width: "350px" }}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <h1 className="text-4xl font-bold mb-3">Login now!</h1>
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <h1 className="">
                      Don't have account?
                      <NavLink
                        className={"p-2 text-red-500 font-semibold"}
                        to={"/register"}
                      >
                        Register
                      </NavLink>
                    </h1>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
              <div class="divider">OR</div>
              <button className="btn btn-white mt-4">
                <FcGoogle /> login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
