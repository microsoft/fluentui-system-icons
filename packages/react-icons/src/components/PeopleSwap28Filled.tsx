import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSwap28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.94 17.53A2 2 0 0015 16H3.85A2 2 0 002 18v2.75c.17 4 4.35 5.25 7.5 5.25 1.35 0 2.89-.23 4.22-.8l-1.2-1.21a1.75 1.75 0 010-2.48l3.5-3.5c.26-.26.58-.42.92-.48z" fill={primaryFill} /><path d="M17.98 21l.5-.51a1.75 1.75 0 00-.5-2.83 2.98 2.98 0 00-.63-1.51l-.13-.15H24a2 2 0 012 1.85V20.03L23.99 18a1.75 1.75 0 10-2.48 2.48l.52.51h-4.05z" fill={primaryFill} /><path d="M17.97 24.5H18v.03l-.03-.03z" fill={primaryFill} /><path d="M15 8.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0z" fill={primaryFill} /><path d="M25 9.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z" fill={primaryFill} /><path d="M17.78 19.78a.75.75 0 10-1.06-1.06l-3.5 3.5c-.3.3-.3.77 0 1.06l3.5 3.5a.75.75 0 101.06-1.06l-2.22-2.22h8.88l-2.22 2.22a.75.75 0 101.06 1.06l3.5-3.5c.3-.3.3-.77 0-1.06l-3.5-3.5a.75.75 0 10-1.06 1.06L24.44 22h-8.88l2.22-2.22z" fill={primaryFill} /></svg>;
};

export default PeopleSwap28Filled;