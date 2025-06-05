import { useState } from "react";
import logo from "../assets/Legend-logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen space-y-5 text-xl lg:flex lg:justify-center lg:items-center lg:m-auto lg:space-x-10">
      <div className="flex flex-col justify-center items-center text-center ">
        <img src={logo} alt="" className="w-[200px]" />
        <div className="text-gray-300 font-medium mt-5">
          Connect with friends and the world around you on Jobcenter.
        </div>
      </div>
      <div>
        <form className="p-10 max-w-md text-xl mx-auto mt-10 bg-black/30 text-center rounded-xl space-y-5">
          <h1 className="text-3xl font-bold mb-4 text-white ">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer">
            Login
          </button>
          <p className="text-teal-500">Forged Password</p>
          <div className="bg-gray-500 h-[1px]"></div>
          <button className="bg-teal-400 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer">
            <p>Create acount</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
