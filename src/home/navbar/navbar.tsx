import { Link } from 'react-router-dom';
import { NavButton } from './nav_button';

export function Nav(): JSX.Element {
  return (
    <nav className="flex flex-row justify-end w-full h-[5%] pr-4 pb-2">
      <Link to={''}><NavButton title={'ABOUT US'} links={['item 1', 'item 2', 'item 3']}/></Link>
      <Link to={''}><NavButton title={'NEWSLETTER'} links={['item 1', 'item 2', 'item 3']}/></Link>
      <Link to={''}><NavButton title={'SERVICES'} links={['item 1', 'item 2', 'item 3']}/></Link>
      <Link to={''}><NavButton title={'INFORMATION'} links={['item 1', 'item 2', 'item 3']}/></Link>
      <Link to={''}>
        <button className="py-2 px-4 text-text-primary font-semibold"disabled={true}>SC3103</button>
      </Link>
    </nav>
  );
}