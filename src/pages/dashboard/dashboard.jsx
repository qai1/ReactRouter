import DataTable from "@/components/dataTable";
import { columns } from "@/components/utils/dataUser/columsUser";
import { data } from "@/components/utils/dataUser/dataUser";

export default function Dashboard() {
  return <DataTable columns={columns} data={data} />;
}
