import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Breadcrumb } from "../Breadcrumb";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumb />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};
