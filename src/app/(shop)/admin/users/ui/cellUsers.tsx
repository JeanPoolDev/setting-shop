'use client';

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"


import Link from "next/link"
import { orderColumns } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { UserColumns } from "./columns";
import { changeUserRole } from '@/actions';

interface CellUsersProps {
  data: UserColumns;
}

const CellUsersActions: React.FC<CellUsersProps> = ({
  data
}) => {

  const router = useRouter()

  const redirection = () => {
    // router.push(`/orders/${ data.id }`)
  }

  return ( 
    <div>
      <select 
        value={ data.rol }
        onChange={ e =>  changeUserRole( data.id, e.target.value) }
        className="text-sm w-full p-2 text-gray-900 dark:text-white">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
   );
}
 
export default CellUsersActions;