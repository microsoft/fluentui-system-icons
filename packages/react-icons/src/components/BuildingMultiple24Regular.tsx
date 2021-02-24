import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingMultiple24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 10a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8 12a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M8 15a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 19a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M14 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M15 12a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M17 10a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M15 9a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M14 5v-.75C14 3.01 13 2 11.75 2h-6.5C4.01 2 3 3 3 4.25v16.5c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V7.25C21 6.01 20 5 18.75 5H14zm-9.5-.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75V5h-.25C11.01 5 10 6 10 7.25V20H4.5V4.25zM14.5 20v-1.5h2V20h-2zm3.5-2.25a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75V20h-1.5V7.25c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75V20H18v-2.25z" fill={primaryFill} /></svg>;
};

export default BuildingMultiple24Regular;