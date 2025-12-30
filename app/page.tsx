import Aboutme from "./components/about-me";
import Contactus from "./components/contact-us";
import Mywork from "./components/mywork";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Showoff from "./components/showoff";
import Faq from "./components/faq";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Aboutme/>
      <Services/>
      <Mywork/>
      <Contactus/>
      <Showoff/>
      <Faq/>
      <Footer/>
    </main>   
  );
}
