import { demoMenusList } from "@/lib/utills";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import MenusshowcaseItem from "./menusshowcase-item";
import { Button } from "./ui/button";

function MenusshowCaseList() {
  return (
    <section className="py-20 container text-center">
      <h2 className="mb-16">CHOOSE & ENJOY</h2>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12">
        {demoMenusList.map(({ description, id, imageUrl, name }) => (
          <MenusshowcaseItem
            key={id}
            description={description}
            imageUrl={imageUrl}
            name={name}
          />
        ))}
      </div>
      <div className="mt-16">
        <Button asChild size={"lg"} className="text-xl py-7 rounded-sm">
          <Link to="/menu">
            <ChevronRight /> View All Menu
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default MenusshowCaseList;
