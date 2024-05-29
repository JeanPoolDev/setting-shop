import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

interface ShopLayoutProps{
  children: React.ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = async ({
  children
}) => {

  const session = await auth();


  if ( session?.user ) {
    redirect('/');
  }


  return ( 
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">

        { children }

      </div>
    </main>
   );
}
 
export default ShopLayout;