import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Group20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 00-2 2v.5H6a.5.5 0 01-.5-.5V6.8a2.5 2.5 0 01-1.5.15V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 01.16-1.5H10a.5.5 0 01-.5-.5v-2h.5a2 2 0 002-2v-.5h2c.28 0 .5.22.5.5v3.2a2.5 2.5 0 011.5-.15V10a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H6.95c.03.16.05.33.05.5zm3.5 5v.5a.5.5 0 01-.5.5h-.5V10c0-.28.22-.5.5-.5h.5z" fill={primaryFill} /><path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
};

export default Group20Filled;