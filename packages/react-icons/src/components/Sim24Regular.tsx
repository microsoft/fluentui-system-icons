import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sim24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 10A2.75 2.75 0 007 12.75v3.5A2.75 2.75 0 009.75 19h4.5A2.75 2.75 0 0017 16.25v-3.5A2.75 2.75 0 0014.25 10h-4.5zM8.5 12.75c0-.69.56-1.25 1.25-1.25H12V14H8.5v-1.25zm0 2.75H12v2H9.75c-.69 0-1.25-.56-1.25-1.25v-.75zm5 2v-6h.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-.75z" fill={primaryFill} /><path d="M7.25 2A3.25 3.25 0 004 5.25v13.5C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V9.29c0-.87-.34-1.7-.95-2.3L15 2.95a3.25 3.25 0 00-2.3-.95H7.25zM5.5 5.25c0-.97.78-1.75 1.75-1.75h5.46c.47 0 .91.18 1.24.51L18 8.05c.33.33.51.77.51 1.24v9.46c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75V5.25z" fill={primaryFill} /></svg>;
};

export default Sim24Regular;