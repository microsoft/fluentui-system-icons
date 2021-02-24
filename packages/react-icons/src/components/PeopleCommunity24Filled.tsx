import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunity24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 15c.97 0 1.75.78 1.75 1.75v.96c.12 2.2-1.51 3.3-4.43 3.3-2.91 0-4.57-1.1-4.57-3.26v-1c0-.97.78-1.75 1.75-1.75h5.5zm-11-5h4.38a4 4 0 001.06 3.85l.17.15h-.11a2.75 2.75 0 00-2.65 2h-.03C3.66 16 2 14.93 2 12.76v-1c0-.97.78-1.75 1.75-1.75zm16.5 0c.97 0 1.75.78 1.75 1.75v.96c.12 2.2-1.51 3.3-4.43 3.3h-.17a2.76 2.76 0 00-2.45-2l-.2-.01h-.1a3.99 3.99 0 001.22-4h4.38zM12 8a3 3 0 110 6 3 3 0 010-6zM6.5 3a3 3 0 110 6 3 3 0 010-6zm11 0a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
};

export default PeopleCommunity24Filled;