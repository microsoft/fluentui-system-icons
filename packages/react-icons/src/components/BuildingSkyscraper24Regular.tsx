import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingSkyscraper24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 11a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M11 15a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M9 11a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M8 15a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M18 15a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M17 19a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8.25 2a.75.75 0 00-.75.75V5H6.25a.75.75 0 00-.75.75V7.8A2.75 2.75 0 004 10.25v10.5c0 .41.34.75.75.75h15c.41 0 .75-.34.75-.75v-5c0-3.1-2.45-5.62-5.51-5.74a2.75 2.75 0 00-1.49-2.2V5.74a.75.75 0 00-.75-.75H11.5V2.75a.75.75 0 00-.75-.75h-2.5zM12 7.5H7v-1h5v1zM13.5 20H12v-2.75a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75V20H5.5v-9.75C5.5 9.56 6.06 9 6.75 9h5.5c.69 0 1.25.56 1.25 1.25V20zm-5 0v-2h2v2h-2zm6.5 0v-8.5c2.23.14 4 1.99 4 4.25V20h-4zM10 5H9V3.5h1V5z" fill={primaryFill} /></svg>;
};

export default BuildingSkyscraper24Regular;