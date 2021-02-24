import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleAudience24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10c.97 0 1.75.78 1.75 1.75V16h-9v-4.25c0-.97.79-1.75 1.75-1.75h5.5z" fill={primaryFill} /><path d="M22 11.75c0-.97-.78-1.75-1.75-1.75h-3.38c.4.47.63 1.08.63 1.75V16h3.75c.41 0 .75-.34.75-.75v-3.5z" fill={primaryFill} /><path d="M6.5 15v-3.25l.01-.22c.05-.58.27-1.1.62-1.53H3.61c-.9.08-1.61.83-1.61 1.75v3.5c0 .41.34.75.75.75H6.5v-1z" fill={primaryFill} /><path d="M12 3a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /><path d="M18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M2 17.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75v.5A3.75 3.75 0 0118.25 22H5.75A3.75 3.75 0 012 18.25v-.5z" fill={primaryFill} /></svg>;
};

export default PeopleAudience24Filled;