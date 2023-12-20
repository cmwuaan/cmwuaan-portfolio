import EcoSyncProject from '@/public/images/EcoSyncCover.jpg';
import eGreenBinProject from '@/public/images/eGreenBinCover.jpg';
import CookhubProject from '@/public/images/CookhubCover.png';
import SolutionChallenge from '@/public/images/SolutionChallenge.jpg';
import Hackathon from '@/public/images/Hackathon.jpg';
import EcoSyncLogo from '@/public/logos/EcoSyncLogo.png';
import eGreenBinLogo from '@/public/logos/eGreenBinLogo.png';
import CookhubLogo from '@/public/logos/CookhubLogo.png';

import Arduino from '@/public/images/tech/Arduino.png';
import NextJS from '@/public/images/tech/NextJS.png';
import NodeJS from '@/public/images/tech/NodeJS.png';
import MongoDB from '@/public/images/tech/MongoDB.png';
import Flutter from '@/public/images/tech/Flutter.png';
import SocketIO from '@/public/images/tech/SocketIO.png';
import Firebase from '@/public/images/tech/Firebase.png';
import Golang from '@/public/images/tech/Golang.png';

export const links = [
  { name: 'Home', hash: '/' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#project' },
  { name: 'More', hash: '#more' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    title: 'EcoSync',
    source: 'https://github.com/cmwuaan',
    description:
      'A project that embraces a greener tomorrow with tech-driven waste management, revolutionizing the path to sustainability.',
    logoUrl: EcoSyncLogo,
    coverUrl: EcoSyncProject,
    techTags: ['Arduino', 'NextJS', 'NodeJS', 'MongoDB'],
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
    title: 'Cookhub',
    source: 'https://github.com/cmwuaan',
    description:
      'The social app for food enthusiasts. Connect, discover, and share delicious recipes with a community that celebrates the joy of cooking!',
    logoUrl: CookhubLogo,
    coverUrl: CookhubProject,
    techTags: ['Flutter', 'Firebase', 'Golang'],
  },
] as const;

export const skillsData = [
  { role: 'Web', techTags: ['HTML', 'CSS', 'Javascript', 'Typescript', 'NodeJS', 'NextJS', 'ReactJS', 'SocketIO'] },
  { role: 'Mobile', techTags: ['Flutter', 'Android'] },
  { role: 'Databases', techTags: ['MySQL', 'Firebase', 'MongoDB'] },
  { role: 'Embedded System', techTags: ['Arduino'] },
  { role: 'DevOps', techTags: ['Docker', 'GCP'] },
] as const;

export const honorsData = [
  {
    imageUrl: SolutionChallenge,
    title: 'Top 1 nationally GDSC Hackathon Vietnam 2023',
    description:
      "The mission of the Solution Challenge is to solve for one or more of the United Nations' 17 Sustainable Development Goals using Google technology.",
  },
  {
    imageUrl: Hackathon,
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
] as const;
