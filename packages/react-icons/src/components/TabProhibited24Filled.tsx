import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabProhibited24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.86 3a3 3 0 00-3 3v12a3 3 0 003 3h6.16a6.46 6.46 0 01-.85-2H5.86a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v5.14c.71.15 1.39.43 2 .8V6a3 3 0 00-3-3h-12z" fill={primaryFill} /><path d="M17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-3.3-3.25a4 4 0 015.56-5.56l-5.57 5.56zm1.05 1.06l5.56-5.56a4 4 0 01-5.56 5.56z" fill={primaryFill} /></svg>;
};

export default TabProhibited24Filled;