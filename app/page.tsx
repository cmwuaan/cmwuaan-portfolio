import Hero from '@/components/hero';
import Intro from '@/components/intro';
import About from './about/page';
import Journey from '@/components/journey';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Honors from '@/components/honors';
import Activities from '@/components/activities';
import Contact from './contact/page';

export default function Home() {
  return (
    <main className="mt-32 mx-[10%] md:mx-12 lg:mx-20 flex flex-col gap-20">
      <Hero />
      <Intro />
      {/* <Journey />
      <About />
      <Projects />
      <Skills />
      <Honors />
      <Activities />
      <Contact /> */}
    </main>
  );
}
