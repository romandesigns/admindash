import { Navbar } from "@/app/ui/dashboard/navbar";
import { Sidebar } from "@/app/ui/dashboard/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
