import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addUser } from "@/utils/api/users";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const addUserSchema = z.object({
  fullname: z
    .string()
    .min(8, { message: "Nama Lengkap harus minimal 8 karakter" }),
  username: z.string().min(5, { message: "Username harus minimal 5 karakter" }),
  password: z.string().min(5, { message: "Password harus minimal 5 karakter" }),
  email: z.email({ message: "Format email tidak valid" }),
  phone_number: z
    .string()
    .refine((val) => !isNaN(val), "Umur harus berupa angka")
    .transform((val) => Number(val)),
  age: z
    .string()
    .refine((val) => !isNaN(val), "Umur harus berupa angka")
    .transform((val) => Number(val))
    .refine((val) => val >= 18 && val <= 60, {
      message: "Umur harus antara 18 - 60 tahun",
    }),
  address: z.string().min(10, { message: "Alamat harus minimal 10 karakter" }),
  role: z.enum(["user", "admin"], { message: "Role tidak valid" }),
});

function AddUser() {
  const form = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      age: "",
      address: "",
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const message = await addUser(data);
      Swal.fire({
        title: "Success",
        text: "Berhasil menambahkan user!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      Swal.fire({
        title: "Error",
        text: "Gagal menambahkan user!",
        icon: "error",
      });
    }
  };

  const navigate = useNavigate();
  return (
    <LayoutDashboard>
      <Card className="max-w-xl mx-auto justify-center h-full flex shadow-lg border border-gray-200 rounded-2xl">
        <CardHeader className="flex flex-row items-center gap-45 mb-10">
          <ArrowLeft
            onClick={() => navigate("/dashboard/user")}
            className="cursor-pointer"
          />
          <CardTitle className="text-2xl font-semibold text-gray-900 text-center">
            Buat User
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Nama Lengkap"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Username"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan Password"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Email"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Nomor Telepon
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Nomor Telepon"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Umur
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Umur"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">
                      Alamat
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Alamat"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-end">
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </LayoutDashboard>
  );
}

export default AddUser;
