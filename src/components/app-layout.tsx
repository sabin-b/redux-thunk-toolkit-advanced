import { Outlet } from "react-router-dom";
import { Footer } from "./main-footer";
import { SiteHeader } from "./main-header";

function AppLayout() {
  return (
    <>
      <div className="h-full flex flex-col md:min-h-screen">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
