import Aboutme from "./components/about-me";
import Mywork from "./components/mywork";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Showoff from "./components/showoff";
import Faq from "./components/faq";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Aboutme/>
      <Experience/>
      <Services/>
      <Mywork/>
      <Showoff/>
      <Faq/>
      <Footer/>
    </main>   
  );
}
