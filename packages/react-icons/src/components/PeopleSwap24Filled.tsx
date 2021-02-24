import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSwap24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 14c.78 0 1.42.6 1.5 1.36V15.67c-.65-.3-1.45-.2-1.99.35l-2.5 2.5a1.75 1.75 0 000 2.47l.68.68c-.9.24-1.83.33-2.69.33-2.72 0-6.34-.96-6.5-4.27V15.5c0-.78.6-1.42 1.36-1.5H13.5z" fill={primaryFill} /><path d="M14.78 17.78L13.56 19h6.88l-1.22-1.22a.75.75 0 011.06-1.06l2.5 2.5a.75.75 0 010 1.07l-2.5 2.5a.75.75 0 01-1.06-1.07l1.22-1.22h-6.88l1.22 1.22a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 111.06 1.06z" fill={primaryFill} /><path d="M20.99 16.02l1.01 1V15.37A1.5 1.5 0 0020.5 14h-5.01l.11.16c.25.39.4.85.4 1.34V17.78l-.02.22h2.19a1.75 1.75 0 012.82-1.98z" fill={primaryFill} /><path d="M8.5 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" fill={primaryFill} /><path d="M17.5 5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
};

export default PeopleSwap24Filled;