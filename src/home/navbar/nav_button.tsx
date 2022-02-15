import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/solid'

export interface LinkProps {
  title: string,
  reactRoute: string
}
export interface NavButtonProps {
  title: string;
  links?: LinkProps[];
}


export function NavButton({ title, links = [] }: NavButtonProps): JSX.Element {
  let reactLinks: JSX.Element[] = [];
  for (let link of links) {
    reactLinks.push(<Link className="block px-4 py-3 text-center text-xs text-text-primary" to={link.reactRoute}>{link.title}</Link>);
  }
  return (
    <div className="block group basis-1/12">
      <button className="inline-flex justify-center items-center w-full px-4 py-2 text-text-primary font-semibold">
        <span>{title}</span>
        <ChevronDownIcon className="mr-1 ml-2 h-3 w-5" aria-hidden="true" />
      </button>
      <div className="relative hidden group-hover:block -mt-1 z-10 bg-background-default">
        {reactLinks}
      </div>
    </div>

  );
}