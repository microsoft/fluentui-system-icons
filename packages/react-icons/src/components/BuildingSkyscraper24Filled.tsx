import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingSkyscraper24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2a.75.75 0 00-.75.75V4h3V2.75a.75.75 0 00-.75-.75h-1.5z" fill={primaryFill} /><path d="M11 5H6.75a.75.75 0 00-.75.75V7h7V5.75a.75.75 0 00-.75-.75H11z" fill={primaryFill} /><path d="M17 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M18 18a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M4 10a2 2 0 011.96-2h7.08A2 2 0 0115 10a5.75 5.75 0 015.5 5.75v5c0 .41-.34.75-.75.75h-8.5v-3a.5.5 0 00-.5-.5h-2.5a.5.5 0 00-.5.5v3h-3a.75.75 0 01-.75-.75V10zm15 5.75a4.25 4.25 0 00-4-4.24V20h4v-4.25zM12.25 11a1 1 0 10-2 0 1 1 0 002 0zm-1 4.25a1 1 0 100-2 1 1 0 000 2zM8.75 11a1 1 0 10-2 0 1 1 0 002 0zm-1 4.25a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default BuildingSkyscraper24Filled;