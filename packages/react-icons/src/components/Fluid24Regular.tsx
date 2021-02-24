import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fluid24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5h5.75C17.98 5 19 6 19 7.25V11h-1.5V7.25a.75.75 0 00-.75-.75H11V5zm-4.5 6v5.75c0 .4.34.75.75.75H11V19H7.25C6.01 19 5 17.98 5 16.75V11h1.5z" fill={primaryFill} /><path d="M2 4.25C2 3.01 3 2 4.25 2h3.5C8.99 2 10 3 10 4.25v3.5C10 8.99 9 10 7.75 10h-3.5C3.01 10 2 9 2 7.75v-3.5zm2.25-.75a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5z" fill={primaryFill} /><path d="M12 14.25c0-1.24 1-2.25 2.25-2.25h5.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C13.01 22 12 21 12 19.75v-5.5zm2.25-.75a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75h-5.5z" fill={primaryFill} /></svg>;
};

export default Fluid24Regular;