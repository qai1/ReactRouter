import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username required!")
    .min(5, "Username must be at least 5 characters"),
  password: z
    .string()
    .min(1, "Password required!")
    .min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard/user");
  };
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
        <h1 className="text-3xl font-bold">Login Form</h1>
        <div className="flex flex-col gap-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Login</label>
              <Input
                type="text"
                placeholder="Email or Username"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div className="flex flex-col pb-5 gap-2">
              <label htmlFor="">Password</label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <label htmlFor="">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500">
                  Register
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
