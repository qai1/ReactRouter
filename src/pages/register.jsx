import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  name: z
    .string()
    .min(1, "Name required!")
    .min(3, "Name must be at least 3 characters"),
  username: z
    .string()
    .min(1, "Username required!")
    .min(5, "Username must be at least 5 characters"),
  password: z
    .string()
    .min(1, "Password required!")
    .min(6, "Password must be at least 5 characters"),
  email: z.string().min(1, "Email required!"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-5 gap-5 shadow-md rounded-[5px]">
        <h1 className="text-3xl font-bold">Register Form</h1>
        <div className="flex flex-col gap-5">
          <form onSubmit={handleSubmit()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Insert your Name"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Insert your Username"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Insert your Email"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col pb-5 gap-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Insert your Password"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <label htmlFor="">
                Already have an account?{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-80 h-10 bg-blue-500 text-white rounded-[5px] cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
