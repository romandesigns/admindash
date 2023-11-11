import { Navbar } from "@/app/ui/dashboard/navbar";
import { Sidebar } from "@/app/ui/dashboard/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <div className="flex-[1] bg-neutral-900 p-[2rem]">
        <Sidebar />
      </div>
      <div className="flex-[4] p-[2rem]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
