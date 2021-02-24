import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BriefcaseMedical32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a1 1 0 00-1 1v4H8a4 4 0 00-4 4v10a4 4 0 004 4h16a4 4 0 004-4V13a4 4 0 00-4-4h-3V5a1 1 0 00-1-1h-8zm7 5h-6V6h6v3zm-2 6v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 112 0z" fill={primaryFill} /></svg>;
};

export default BriefcaseMedical32Filled;