import { Outlet } from "react-router";
import Header from "./components/Header";
import AppSidebar from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <main className={`w-full`}>
          <Header />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
