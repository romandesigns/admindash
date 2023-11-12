import { CardUi } from "../ui/dashboard/card";
import { Charts } from "../ui/dashboard/charts";
import { RightBar } from "../ui/dashboard/rightbar";
import { Transactions } from "../ui/dashboard/transactions";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="flex-[4]">
        <div className="py-[2rem] flex items-center justify-between gap-2">
          <CardUi />
          <CardUi />
          <CardUi />
        </div>
        <Transactions />
        <Charts />
      </div>
      <div className="flex-[1]">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
