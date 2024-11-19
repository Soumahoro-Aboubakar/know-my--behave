import ClientTestimonials from "../features/accueil/components/ClientTestimonials";
import Footer from "../features/accueil/components/Footer";
import IntroductionMessage from "../features/accueil/components/IntroductionMessage";
import Navbar from "../features/accueil/components/Navbar";
import Prices from "../features/accueil/components/Prices";
import UseCases from "../features/accueil/components/UseCases";

const AccueilPage = () => {
  return (
    <div className="min-h-screen min">
      <section className="max-w-7xl mx-auto pt-2 px-6 lg:my-6 h-screen">
        <Navbar />
        <IntroductionMessage />
      </section>
      <UseCases />
      <Prices />
      <ClientTestimonials/>
      <Footer />
    </div>
  );
};

export default AccueilPage;
