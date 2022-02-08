import { v4 as uuidv4 } from 'uuid';
import CalendarApp from '../images/calendar-app-pic.png';
import HuluClon from '../images/hulu-clon.png';
import LandingPage from '../images/Next.js-landing.png';
import BlogCafe from '../images/Blog-Cafe.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Calendar',
    desc: 'Calendar App, Front End: React, BackEnd: Node.js',
    img: CalendarApp,
    url: 'https://mern-calendar-dab.herokuapp.com',
  },
  {
    id: uuidv4(),
    name: 'Hulu Clon',
    desc: 'Next.Js and React FrontPage, fetching Movie Database to return Pictures from movies',
    img: HuluClon,
    url: 'https://hulu-clon-react.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'Landing Page',
    desc: 'Full Responsive Front End of a Business landing Page with Next.Js and React',
    img: LandingPage,
    url: 'https://loving-albattani-ec8105.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Blog Cafe',
    desc: 'Bar/Restaurant WebPage with HTML, CSS and JavaScript .',
    img: BlogCafe,
    url: 'https://www.blogcafe.dabmartinez.com/',
  },
];

export default projects;
