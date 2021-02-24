import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSearch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v4.5a5.5 5.5 0 011.5-.88V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-8.28l1.5 1.5h6.78A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75z" fill={primaryFill} /><path d="M8.66 11c.58.4 1.07.91 1.45 1.5h7.14a.75.75 0 000-1.5H8.66z" fill={primaryFill} /><path d="M15.25 15.5H11a5.5 5.5 0 00-.2-1.5h4.45a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M6.75 8a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M5.5 20c.97 0 1.87-.3 2.6-.83l2.62 2.61a.75.75 0 101.06-1.06l-2.61-2.61A4.5 4.5 0 105.5 20zm0-1.5a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
};

export default SlideSearch24Regular;