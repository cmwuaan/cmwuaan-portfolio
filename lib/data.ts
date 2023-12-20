import EcoSyncProject from '@/public/images/EcoSyncCover.jpg';
import eGreenBinProject from '@/public/images/eGreenBinCover.jpg';
import CookhubProject from '@/public/images/CookhubCover.png';
import SolutionChallenge from '@/public/images/SolutionChallenge.jpg';
import Hackathon from '@/public/images/Hackathon.jpg';
import EcoSyncLogo from '@/public/logos/EcoSyncLogo.png';
import eGreenBinLogo from '@/public/logos/eGreenBinLogo.png';
import CookhubLogo from '@/public/logos/CookhubLogo.png';
import CMQLogo from '@/public/logos/CMQLogo.png';
import CMQProject from '@/public/images/CMQCover.png';

import Arduino from '@/public/images/tech/Arduino.png';
import NextJS from '@/public/images/tech/NextJS.png';
import NodeJS from '@/public/images/tech/NodeJS.png';
import MongoDB from '@/public/images/tech/MongoDB.png';
import Flutter from '@/public/images/tech/Flutter.png';
import SocketIO from '@/public/images/tech/SocketIO.png';
import Firebase from '@/public/images/tech/Firebase.png';
import Golang from '@/public/images/tech/Golang.png';
import Android from '@/public/images/tech/Android.png';
import CSS from '@/public/images/tech/CSS.png';
import Docker from '@/public/images/tech/Docker.png';
import GCP from '@/public/images/tech/GCP.png';
import Javascript from '@/public/images/tech/Javascript.png';
import ReactJS from '@/public/images/tech/ReactJS.png';
import Typescript from '@/public/images/tech/Typescript.png';
import HTML from '@/public/images/tech/HTML.png';
import MySQL from '@/public/images/tech/MySQL.png';
import Tailwind from '@/public/images/tech/Tailwind.png';
import Figma from '@/public/images/tech/Figma.png';

import WebItem from '@/public/images/WebItem.svg';
import MobileItem from '@/public/images/MobileItem.svg';
import DatabaseItem from '@/public/images/DatabaseItem.svg';
import CPUItem from '@/public/images/CPUItem.svg';

export const links = [
  { name: 'Home', hash: '/' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#project' },
  { name: 'More', hash: '#more' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    title: 'Portfolio',
    source: 'https://github.com/cmwuaan',
    description:
      "My personal landing page. Explore my portfolio for software projects. Let's connect and bring ideas to life! Have fun <3",
    logoUrl: CMQLogo,
    coverUrl: CMQProject,
    techTags: ['HTML', 'CSS', 'Typescript', 'Tailwind', 'NextJS', 'Figma'],
  },
  {
    title: 'Cookhub',
    source: 'https://github.com/cmwuaan',
    description:
      'The social app for food enthusiasts. Connect, discover, and share delicious recipes with a community that celebrates the joy of cooking!',
    logoUrl: CookhubLogo,
    coverUrl: CookhubProject,
    techTags: ['Flutter', 'Firebase'],
  },
  {
    title: 'eGreenBin',
    source: 'https://github.com/GDSC-UIT/eGreenBin',
    description:
      'A mobile app solving the problem of garbage sorting by helping to build and form habits and awareness for children from an early age.',
    logoUrl: eGreenBinLogo,
    coverUrl: eGreenBinProject,
    techTags: ['Flutter', 'SocketIO', 'Arduino'],
  },
  {
    title: 'EcoSync',
    source: 'https://github.com/cmwuaan',
    description:
      'A project that embraces a greener tomorrow with tech-driven waste management, revolutionizing the path to sustainability.',
    logoUrl: EcoSyncLogo,
    coverUrl: EcoSyncProject,
    techTags: ['HTML', 'CSS', 'Javascript', 'SocketIO', 'NextJS', 'NodeJS', 'MongoDB', 'Firebase', 'Arduino'],
  },
] as const;

type SkillData = {
  role: string;
  imageRole: string;
  drawComponent: React.ComponentType<any> | null; // Define the drawComponent property
  techTags: string[];
};

export const skillsData: SkillData[] = [
  {
    role: 'Web',
    imageRole: WebItem,
    drawComponent: null,
    techTags: ['HTML', 'CSS', 'Javascript', 'Typescript', 'NodeJS', 'NextJS', 'ReactJS', 'SocketIO'],
  },
  { role: 'Mobile', imageRole: MobileItem, drawComponent: null, techTags: ['Flutter', 'Android'] },
  { role: 'Databases', imageRole: DatabaseItem, drawComponent: null, techTags: ['MySQL', 'Firebase', 'MongoDB'] },
  { role: 'Embedded System', imageRole: CPUItem, drawComponent: null, techTags: ['Arduino'] },
  // { role: 'DevOps', imageRole: '', drawComponent: null, techTags: ['Docker', 'GCP'] },
] as const;

export const honorsData = [
  {
    imageUrl: Hackathon,
    source:
      'https://tuyensinh.uit.edu.vn/nhom-sv-uit-co-du-cong-nghe-xuat-sac-nhat-tai-google-developer-student-clubs-gdsc-hackathon-vietnam-nam-2023',
    title: 'Top 1 nationally GDSC Hackathon Vietnam 2023',
    description:
      "The mission of the Solution Challenge is to solve for one or more of the United Nations' 17 Sustainable Development Goals using Google technology.",
  },
  {
    imageUrl: SolutionChallenge,
    source:
      'https://www.uit.edu.vn/chuc-mung-egreenbin-va-sowaste-2-nhom-sinh-vien-uit-lot-top-100-solution-challenge-2023',
    title: 'Top 100 globally Google Solution Challenge 2023',
    description:
      'GDSC Hackathon Viet Nam 2023: UN goals-focused programming competition by Google Developer Student Clubs and CoderSchool in Ho Chi Minh City. Open to teams of up to four students nationwide',
  },
] as const;

export const activitiesData = [
  { from: '03/2022', to: 'present', role: 'President', organization: 'Taekwondo UIT Club' },
  {
    from: '10/2022',
    to: '07/2023',
    role: 'Front-End Developer',
    organization: 'Google Developer Student Clubs - UIT',
  },
  { from: '08/2023', to: 'present', role: 'Chapter Lead', organization: 'Google Developer Student Clubs - UIT' },
] as const;

export const imageTechTags = [
  { name: 'Arduino', imageUrl: Arduino },
  { name: 'NextJS', imageUrl: NextJS },
  { name: 'NodeJS', imageUrl: NodeJS },
  { name: 'MongoDB', imageUrl: MongoDB },
  { name: 'Flutter', imageUrl: Flutter },
  { name: 'SocketIO', imageUrl: SocketIO },
  { name: 'Firebase', imageUrl: Firebase },
  { name: 'Golang', imageUrl: Golang },
  { name: 'Android', imageUrl: Android },
  { name: 'CSS', imageUrl: CSS },
  { name: 'Docker', imageUrl: Docker },
  { name: 'GCP', imageUrl: GCP },
  { name: 'Javascript', imageUrl: Javascript },
  { name: 'ReactJS', imageUrl: ReactJS },
  { name: 'Typescript', imageUrl: Typescript },
  { name: 'HTML', imageUrl: HTML },
  { name: 'MySQL', imageUrl: MySQL },
  { name: 'Tailwind', imageUrl: Tailwind },
  { name: 'Figma', imageUrl: Figma },
] as const;
