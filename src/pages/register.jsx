import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Name required!")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at 50 characters"),
  username: z
    .string()
    .min(1, "Username required!")
    .min(5, "Username must be at least 5 characters"),
  password: z
    .string()
    .min(1, "Password required!")
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string().min(1, "Confirm Password required!"),
  email: z.string().min(1, "Email required!").email("Email format invalid!"),
  age: z
    .string()
    .refine((val) => !isNaN(val), "Umur harus berupa angka")
    .transform((val) => Number(val))
    .refine((val) => val >= 18 && val <= 60, {
      message: "Umur harus antara 18 hingga 60 tahun",
    }),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("From data:", data);
    navigate("/dashboard/user");
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-5 gap-5 shadow-md rounded-[5px]">
        <h1 className="text-3xl font-bold">Register Form</h1>
        <div className="flex flex-col gap-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <Input
                type="text"
                placeholder="Enter your Name"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Username</label>
              <Input
                type="text"
                placeholder="Create Username"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <Input
                type="text"
                placeholder="Enter your Email"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <Input
                type="password"
                placeholder="Create Password"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <label htmlFor="">Confirm Password</label>
              <Input
                type="password"
                placeholder="Enter your Password"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col pb-2 gap-2">
              <label htmlFor="">Age</label>
              <Input
                type="number"
                placeholder="Enter your Age"
                className="w-80 h-12 px-3 border-2 border-gray-600 rounded-[5px]"
                {...register("age")}
              />
              {errors.age && (
                <p className="text-red-600">{errors.age.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="">
                Already have an account?{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </label>
              <button
                type="submit"
                className="w-80 h-10 bg-blue-500 text-white rounded-[5px] cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
