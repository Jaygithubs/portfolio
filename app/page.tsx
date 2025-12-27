import Aboutus from "./components/about-us";
import Contactus from "./components/contact-us";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Aboutus/>
      <Services/>
      <Experience/>
      <Contactus/>
      <Footer/>
    </main>   
  );
}
