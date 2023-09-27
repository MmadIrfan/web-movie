import { useState } from "react";
import axios from "axios";
import { SyntheticEvent } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { login, logout, isLoggedIn } from "@/components/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3001/users", {
        params: {
          username,
          password,
        },
      });

      const user = response.data[0];
      if (user) {
        setMessage(`Selamat Datang ${username}`);
        login();
        router.push("/");
      } else {
        setMessage("Login failed. Invalid credentials.");
      }
    } catch (error) {
      setMessage("Error loggin in. Please try again.");
    }
  };

  const handleLogout = () => {
    logout();
    setMessage("");
  };

  return (
    <Layout judul={isLoggedIn() ? "Logout" : "Login"}>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="bg-birutua p-6 rounded-lg shadow-lg w-96">
          {message && <p className="text-red-500">{message}</p>}
          {isLoggedIn() ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
            >
              Logout
            </button>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-hampirbiru font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border p-2 w-full rounded focus:outline-none focus:border-blue-500"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-hampirbiru font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border p-2 w-full rounded focus:outline-none focus:border-birumuda"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-birumuda text-hampirbiru py-2 px-4 rounded hover:bg-blue-600 w-full"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
