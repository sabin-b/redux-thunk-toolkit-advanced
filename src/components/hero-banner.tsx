import { siteConfig } from "@/config/site";

function HeroBanner() {
  return (
    <section className="h-full md:min-h-screen md:bg-desktop bg-no-repeat bg-cover flex flex-col md:flex-row md:items-center">
      <div className="container h-full mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:justify-center md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
          <h1>
            Welcome to React Pizza! 🍕
          </h1>
          <p className="mb-8 leading-relaxed md:max-w-[550px]">
            Order delicious pizzas online with ease. Explore our menu, customize
            your order, and enjoy fast delivery or convenient pickup. Order now
            and savor the best pizza in town!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src={siteConfig.bannerUrl} className="block md:hidden" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
