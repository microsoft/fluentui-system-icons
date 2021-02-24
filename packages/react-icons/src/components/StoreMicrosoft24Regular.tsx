import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StoreMicrosoft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 9.5V13H8V9.5h3.5z" fill={primaryFill} /><path d="M11.5 17.5V14H8v3.5h3.5z" fill={primaryFill} /><path d="M16 9.5V13h-3.5V9.5H16z" fill={primaryFill} /><path d="M16 17.5V14h-3.5v3.5H16z" fill={primaryFill} /><path d="M8 6V3.75C8 2.78 8.78 2 9.75 2h4.5c.97 0 1.75.78 1.75 1.75V6h5.25c.41 0 .75.34.75.75v11.5A2.75 2.75 0 0119.25 21H4.75A2.75 2.75 0 012 18.25V6.75c0-.41.34-.75.75-.75H8zm1.5-2.25V6h5V3.75a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25zm-6 14.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V7.5h-17v10.75z" fill={primaryFill} /></svg>;
};

export default StoreMicrosoft24Regular;