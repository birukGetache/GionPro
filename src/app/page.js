import Text from './components/text';
import Navbar from './components/Nav';
import About from './components/About';
import Services from './components/Service';
import Team from './components/Team';
import Project from './components/Project';
import Partner from './components/Partner';
import Fotter from './components/Fotter';

export default function Home() {
  return (
    <div className="w-screen">
      <img src="/grid.svg" alt="grid" />
      <div className="absolute top-0 w-screen">
        <Navbar />
        <Text />
      </div>
      <div className="relative mt-[calc(100vh)] sm:mt-0">
        <About className="about" />
      </div>
      <Services />
      <Team />
      <Project />
      <Partner />
      <Fotter />
    </div>
  );
}
