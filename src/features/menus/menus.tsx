import Loader from "@/components/loader";
import { PizzaMenuList } from "@/components/pizzamenus-list";
import { useMenus } from "./hooks/useMenus";

function MenusList() {
  const { data: { data = [] } = {}, isLoading } = useMenus();
  if (isLoading) return <Loader />;
  return <PizzaMenuList pizzaList={data || []} />;
}

export default MenusList;
