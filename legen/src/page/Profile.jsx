import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Legend-logo.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    if (!storedUser) {
      alert("You must login first.");
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("Users");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  p-6 transition-all duration-300">
      {user && (
        <div className="bg-white/15 rounded-lg shadow-lg p-8 max-w-md w-full ">
          <div className="w-full flex flex-col justify-center items-center space-y-4">
            <img src={logo} alt="logo" className="w-[200px]" />
            <h1 className="text-3xl font-bold mb-4 text-teal-600">Profile</h1>
          </div>

          <p className="text-xl mb-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-xl mb-6">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-xl mb-6">
            <strong>Password:</strong> *****************
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
