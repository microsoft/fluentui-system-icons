import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Group24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M19 7a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M21 19a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M5 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M7.96 5.5A3.02 3.02 0 007.83 4h4.67A2.5 2.5 0 0115 6.5V9h2.5a2.5 2.5 0 012.5 2.5v4.67a3 3 0 00-1.5-.13V11.5a1 1 0 00-1-1H15v2a2.5 2.5 0 01-2.5 2.5h-2v2.5a1 1 0 001 1h4.54a3.02 3.02 0 00.13 1.5H11.5A2.5 2.5 0 019 17.5V15H6.5A2.5 2.5 0 014 12.5V7.83a3 3 0 001.5.13v4.54a1 1 0 001 1H9v-2A2.5 2.5 0 0111.5 9h2V6.5a1 1 0 00-1-1H7.96zm4.54 8a1 1 0 001-1v-2h-2a1 1 0 00-1 1v2h2z" fill={primaryFill} /></svg>;
};

export default Group24Regular;