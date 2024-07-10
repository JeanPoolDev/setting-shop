import { Footer, Sidebar } from "@/components";
import TopMenu from "@/components/ui/top-menu/TopMenu";

interface ShopLayoutProps{
  children: React.ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({
  children
}) => {
  return ( 
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10 pt-16">
      { children }
      </div>
      <Footer />
    </main>
   );
}
 
export default ShopLayout;