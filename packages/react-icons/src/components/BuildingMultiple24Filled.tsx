import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingMultiple24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8 18a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8 9a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 7a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M14 4.25V5h4.75C19.99 5 21 6 21 7.25v13.5c0 .41-.34.75-.75.75h-2.5a.5.5 0 01-.5-.5v-2.25a.5.5 0 00-.5-.5h-2.5a.5.5 0 00-.5.5V21a.5.5 0 01-.5.5h-9.5a.75.75 0 01-.75-.75V4.25C3 3.01 4 2 5.25 2h6.5C12.99 2 14 3 14 4.25zM5.25 3.5a.75.75 0 00-.75.75V20H10V7.25C10 6.01 11 5 12.25 5h.25v-.75a.75.75 0 00-.75-.75h-6.5zM18 15a1 1 0 10-2 0 1 1 0 002 0zm-4 1a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 10-2 0 1 1 0 002 0zm-4 1a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 10-2 0 1 1 0 002 0zm-4 1a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default BuildingMultiple24Filled;