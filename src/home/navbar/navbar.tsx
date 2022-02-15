import { Link } from 'react-router-dom';
import { NavButton } from './nav_button';

export function Nav(): JSX.Element {
  return (
    <nav className="flex flex-row justify-end w-full h-[5%] pr-4 pb-2">
      <Link to={''}>
        <NavButton title={'ABOUT US'} 
        links={[
          {'title': 'ABOUT SGA', 'reactRoute': '/about-sga'},
          {'title': 'MEET THE TEAM', 'reactRoute': '/met-the-team'}]}/>
      </Link>
      <Link to={''}>
        <NavButton title={'NEWSLETTER'} 
        links={[
          {'title': 'BLOG', 'reactRoute': '/blog'},
          {'title': 'PHOTOGRAHPS', 'reactRoute': '/photographs'}]}/>
      </Link>
      <Link to={''}>
        <NavButton title={'SERVICES'} 
        links={[
          {'title': 'APPEAL TICKET', 'reactRoute': '/about-sga'},
          {'title': 'COURSE CONCERNS', 'reactRoute': '/met-the-team'},
          {'title': 'SEXUAL ASSAULT', 'reactRoute': '/met-the-team'},
          {'title': 'MENTAL HEALTH', 'reactRoute': '/met-the-team'}]}/>
      </Link>
      <Link to={''}>
        <NavButton title={'INFORMATION'} 
        links={[
          {'title': 'CLUB LINKS', 'reactRoute': '/about-sga'},
          {'title': 'DOCUMENTS', 'reactRoute': '/met-the-team'},
          {'title': 'EMAIL LINKS', 'reactRoute': '/met-the-team'}]}/>
      </Link>
      <Link to={''}>
        <button className="py-2 px-4 text-text-primary font-semibold"disabled={true}>SC3103</button>
      </Link>
    </nav>
  );
}