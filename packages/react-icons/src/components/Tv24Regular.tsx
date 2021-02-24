import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tv24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v8.5A2.75 2.75 0 004.75 18h14.5A2.75 2.75 0 0022 15.25v-8.5A2.75 2.75 0 0019.25 4H4.75zM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-8.5z" fill={primaryFill} /><path d="M5.75 19.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H5.75z" fill={primaryFill} /></svg>;
};

export default Tv24Regular;