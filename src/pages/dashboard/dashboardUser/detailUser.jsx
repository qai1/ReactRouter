import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "@/utils/api/users";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUserById = async (id) => {
    try {
      const response = await getUserById(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserById(id);
  }, [id]);

  return (
    <LayoutDashboard>
      <Card className="max-w-xl mx-auto justify-center  h-full flex shadow-lg border border-gray-200 rounded-2xl">
        <CardHeader className="flex flex-row items-center gap-45 mb-10">
          <ArrowLeft
            onClick={() => navigate("/dashboard/user")}
            className="cursor-pointer"
          />
          <CardTitle className="text-2xl font-semibold text-gray-900 text-center">
            Detail User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <Label>Nama Lengkap</Label>
              <Input disabled value={user.fullname} className="font-semibold" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Username</Label>
              <Input
                disabled
                value={user.username}
                className="font-semibold "
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Email</Label>
              <Input disabled value={user.email} className="font-semibold " />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Nomor Telepon</Label>
              <Input
                disabled
                value={user.phone_number}
                className="font-semibold"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Umur</Label>
              <Input disabled value={user.age} className="font-semibold " />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Alamat</Label>
              <Input disabled value={user.address} className="font-semibold " />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Role</Label>
              <Input disabled value={user.role} className="font-semibold " />
            </div>
          </div>
        </CardContent>
      </Card>
    </LayoutDashboard>
  );
}

export default DetailUser;
