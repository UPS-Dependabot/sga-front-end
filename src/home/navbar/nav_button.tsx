import { Link } from 'react-router-dom';

export interface NavButtonProps {
  title: string;
  links?: string[];
}


export function NavButton({ title, links = [] }: NavButtonProps): JSX.Element {
  let reactLinks: JSX.Element[] = [];
  for (let link of links) {
    reactLinks.push(<Link className="block px-4 py-3 text-center text-text-primary font-semibold" to={''}>{link}</Link>);
  }
  return (
    <div className="block group basis-1/12">
      <button className="w-full px-4 py-2 text-text-primary font-semibold">{title}</button>
      <div className="relative hidden group-hover:block -mt-1 z-10 bg-background-default">
        {reactLinks}
      </div>
    </div>

  );
}