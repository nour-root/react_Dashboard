import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
    </div>
  );
}
