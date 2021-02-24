import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Speaker224Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25a1.25 1.25 0 00-2.08-.93L8.42 7.3a.75.75 0 01-.49.19H4.25C3.01 7.5 2 8.5 2 9.75v4.5c0 1.24 1 2.25 2.25 2.25h3.68c.18 0 .36.06.5.19l4.49 3.99c.8.72 2.08.14 2.08-.93V4.25zM9.42 8.43l4.08-3.62v14.38l-4.08-3.62A2.25 2.25 0 007.93 15H4.25a.75.75 0 01-.75-.75v-4.5c0-.42.34-.75.75-.75h3.68c.55 0 1.08-.2 1.5-.57z" fill={primaryFill} /><path d="M19 5.9a.75.75 0 011.04.15 9.96 9.96 0 010 11.9.75.75 0 01-1.2-.9 8.46 8.46 0 000-10.1.75.75 0 01.15-1.05z" fill={primaryFill} /><path d="M17.14 8.37a.75.75 0 011.02.3 6.97 6.97 0 010 6.66.75.75 0 01-1.32-.72 5.47 5.47 0 000-5.22.75.75 0 01.3-1.02z" fill={primaryFill} /></svg>;
};

export default Speaker224Regular;