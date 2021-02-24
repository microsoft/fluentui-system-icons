import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunity24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 15c.97 0 1.75.78 1.75 1.75v.96c.12 2.2-1.51 3.3-4.43 3.3-2.91 0-4.57-1.1-4.57-3.26v-1c0-.97.78-1.75 1.75-1.75h5.5zm0 1.5h-5.5a.25.25 0 00-.25.25v1c0 1.18.89 1.76 3.07 1.76 2.16 0 3-.56 2.93-1.76v-1a.25.25 0 00-.25-.25zm-11-6.5h4.38a4 4 0 00-.1 1.5H3.75a.25.25 0 00-.25.25v1c0 1.18.89 1.76 3.07 1.76.46 0 .86-.03 1.2-.08-.56.36-.98.92-1.17 1.58h-.03C3.66 16 2 14.9 2 12.75v-1c0-.97.78-1.75 1.75-1.75zm16.5 0c.97 0 1.75.78 1.75 1.75v.96c.12 2.2-1.51 3.3-4.43 3.3h-.17a2.76 2.76 0 00-1.22-1.6c.39.06.85.1 1.39.1 2.16 0 3-.56 2.93-1.76v-1a.25.25 0 00-.25-.25h-4.28a4.05 4.05 0 00-.1-1.5h4.38zM12 8a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6.5 3a3 3 0 110 6 3 3 0 010-6zm11 0a3 3 0 110 6 3 3 0 010-6zm-11 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default PeopleCommunity24Regular;