import Hero from '@/components/hero';
import About from '@/components/about';
import Journey from '@/components/journey';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Honors from '@/components/honors';
import Activities from '@/components/activities';
import Intro from '@/components/intro';
import Contact from '@/components/contact';
import Spacer from '@/components/spacer';

export default function Home() {
  return (
    <main className="mx-[10%] md:mx-12 lg:mx-20 flex flex-col gap-20">
      <Spacer />
      <Hero />
      <Intro />
      {/* <Journey /> */}
      <About />
      <Projects />
      <Skills />
      <Honors />
      {/* <Activities /> */}
      <Contact />
    </main>
  );
}
