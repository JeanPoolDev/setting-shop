export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import {  getPaginatedUsers } from "@/actions";
import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { UsersTable } from './ui/UsersTable';
import { UserColumns } from "./ui/columns";

export default async function OrdersPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  }

  const formattedUsers: UserColumns[] = users.map((item) => ({
    id: item.id,
    email: item.email,
    nombre: item.name,
    rol: item.role
  }))

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <div className="mb-10">

        <UsersTable users={ users } data={formattedUsers}/>

        {/* <Pagination totalPages={ 1 } /> */}
      </div>
    </>
  );
}
