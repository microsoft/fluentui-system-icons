import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a3.75 3.75 0 00-3.74 3.42A8 8 0 004 12.5V14h16v-1.5a8 8 0 00-4.26-7.08A3.75 3.75 0 0012 2zm8 13.71H9.5v1.54a.75.75 0 01-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25v-3.04zM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 014.04 0A8.01 8.01 0 0012 4.5zm-4 5.92A2.42 2.42 0 0110.42 8h3.16A2.42 2.42 0 0116 10.42c0 .87-.7 1.58-1.58 1.58H9.58C8.71 12 8 11.3 8 10.42zm2.42-.92c-.51 0-.92.41-.92.92 0 .04.04.08.08.08h4.84c.04 0 .08-.04.08-.08 0-.51-.41-.92-.92-.92h-3.16z" fill={primaryFill} /></svg>;
};

export default Backpack24Filled;