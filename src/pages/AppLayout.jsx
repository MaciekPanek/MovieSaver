import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";

function AppLayout() {
  return (
    <div className="main-body">
      <Navigation />

      <div>
        <main className="h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
