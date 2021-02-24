import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.68 4.38l3.93 3.94-8.04 8.04a2 2 0 01-.72.46l-.16.05-4.06 1.11a.5.5 0 01-.63-.53l.02-.08 1.1-4.06a2 2 0 01.4-.76l.12-.13 8.04-8.04zm1.56-1.56a2.78 2.78 0 014.07 3.8l-.13.13-.86.86-3.94-3.93.86-.86z" fill={primaryFill} /></svg>;
};

export default Edit20Filled;