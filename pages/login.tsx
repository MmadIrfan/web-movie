import { useState } from "react";
import axios from "axios";
import { SyntheticEvent } from "react";
import Layout from "@/components/Layout";
import { Router, useRouter } from "next/router";

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
        router.push("/");
      } else {
        setMessage("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Login gagal")
    }
  };

  return (
    <Layout judul="Login">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="bg-birutua p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-semibold mb-4 text-center text-hampirbiru">
            Login
          </h1>
          {message && <p className="text-red-500">{message}</p>}
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
        </div>
      </div>
    </Layout>
  );
};

export default Login;
