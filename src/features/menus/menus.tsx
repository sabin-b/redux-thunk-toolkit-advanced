import Loader from "@/components/loader";
import { useMenus } from "./hooks/useMenus";

function MenusList() {
  const { data: { data = [] } = {}, isLoading } = useMenus();
  console.log(data);
  if (isLoading) return <Loader />;
  return (
    <div>
      Menus list
      <h4></h4>
    </div>
  );
}

export default MenusList;
