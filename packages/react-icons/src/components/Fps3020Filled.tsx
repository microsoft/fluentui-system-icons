import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3020Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2A2.5 2.5 0 0010 4.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0012.5 2zm0 6.5a1 1 0 01-1-1v-3a1 1 0 112 0v3a1 1 0 01-1 1z" fill={primaryFill} /><path d="M3.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M8.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm1.5 3H9v-2h1a1 1 0 110 2z" fill={primaryFill} /><path d="M13 13.75c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 01-1 0v-.01a.49.49 0 00-.49-.49h-.76a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 011 0v.01c0 .27.22.49.49.49h.76a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75z" fill={primaryFill} /><path d="M6.5 5.25c.63 0 1-.46 1-.88 0-.4-.37-.87-1-.87-.26 0-.48.08-.64.2-.2.15-.41.3-.65.3-.62 0-1.09-.58-.7-1.06A2.54 2.54 0 016.5 2C7.88 2 9 3.06 9 4.38a2.3 2.3 0 01-.66 1.6A2.37 2.37 0 016.62 10h-.25c-.78 0-1.47-.38-1.9-.96-.36-.48.1-1.04.7-1.04.25 0 .47.16.67.32.15.11.33.18.53.18h.25a.87.87 0 100-1.75H6.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default Fps3020Filled;