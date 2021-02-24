import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabArrowLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v6.02a6.46 6.46 0 00-2-.85V6a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h5.17c.17.72.46 1.4.85 2H6a3 3 0 01-3-3V6z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-5.65-2.15a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L15.71 18h4.79a.5.5 0 000-1h-4.8l1.65-1.65z" fill={primaryFill} /></svg>;
};

export default TabArrowLeft24Filled;