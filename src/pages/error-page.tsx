import { Footer } from "@/components/main-footer";
import { SiteHeader } from "@/components/main-header";
import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

function Errorpage() {
  const navigate = useNavigate();
  const routerError = useRouteError();
  console.log(routerError);
  const { data } = routerError as { data: string };
  return (
    <div className="h-full flex flex-col md:min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="flex items-center h-full justify-center pt-8 md:pt-12 ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="md:max-w-xl text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">{data}</p>
              <p className="mt-4 mb-8 dark:text-gray-600">
                But dont worry, you can find plenty of other things on our site.
              </p>
              <Button className="text-xl py-7 rounded-sm" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Errorpage;
