import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSearch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20h-6.78l-2.04-2.05c.36-.74.57-1.57.57-2.45h4.25a.75.75 0 000-1.5h-4.46a5.47 5.47 0 00-.68-1.5h7.14a.75.75 0 000-1.5H8.66a5.48 5.48 0 00-6.66.26V6.75zM6.75 8a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M5.5 20c.97 0 1.87-.3 2.6-.83l2.62 2.61a.75.75 0 101.06-1.06l-2.61-2.61A4.5 4.5 0 105.5 20zm0-1.5a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
};

export default SlideSearch24Filled;