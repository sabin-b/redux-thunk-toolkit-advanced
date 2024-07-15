import { showCaseDishItems } from "@/lib/utills";
import DishshowcaseItem from "./dishshowcase-item";

function DishshowCaseList() {
  return (
    <section className="bg-primary p-4">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-dish-showcase-grid gap-6">
          {showCaseDishItems.map((dishitem) => (
            <DishshowcaseItem
              key={dishitem.label}
              imageUrl={dishitem.imageUrl}
              label={dishitem.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DishshowCaseList;
