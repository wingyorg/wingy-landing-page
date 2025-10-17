import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Services from '../components/Services';
import JoinUs from '../components/JoinUs';
import InstallApp from '../components/InstallApp';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
       <div id="categories">
        <Categories />
      </div>
      <div id="join">
        <JoinUs />
      </div>
      <div id="app">
        <InstallApp />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}
