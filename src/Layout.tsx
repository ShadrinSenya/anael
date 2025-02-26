
import { Outlet } from "react-router-dom";
import Index from "./pages/Index";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Index>
      <Outlet />
    </Index>
  );
};

export default Layout;
