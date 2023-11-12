import { Navbar } from "@/app/ui/dashboard/navbar";
import { Sidebar } from "@/app/ui/dashboard/sidebar";
import Footer from "../ui/dashboard/footer/footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="bg-neutral-900 p-[2rem] flex-[1] !sticky top-0">
        <Sidebar />
      </div>
      <div className="p-[2rem] flex-[8]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
