import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Glasses28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.32 7.5c-.33 0-.64.13-.88.36L5.77 10.5h4.48c1.35 0 2.47.97 2.7 2.25h2.1a2.75 2.75 0 012.7-2.25h4.48l-2.67-2.64a1.25 1.25 0 00-.88-.36h-1.43a.75.75 0 110-1.5h1.43c.72 0 1.42.28 1.93.8l4.42 4.35.3.3.02.02c.4.48.65 1.1.65 1.78v4A3.75 3.75 0 0122.25 21h-3.5A3.75 3.75 0 0115 17.25v-3h-2v3A3.75 3.75 0 019.25 21h-3.5A3.75 3.75 0 012 17.25v-4c0-.68.25-1.3.66-1.78l.02-.03c.09-.1.18-.2.29-.28l4.42-4.37C7.9 6.3 8.59 6 9.32 6h1.43a.75.75 0 010 1.5H9.32z" fill={primaryFill} /></svg>;
};

export default Glasses28Filled;