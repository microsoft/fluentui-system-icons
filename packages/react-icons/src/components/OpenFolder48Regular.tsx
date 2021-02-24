import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenFolder48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.75 24c.69 0 1.25-.56 1.25-1.25v-9.5c0-4-3.25-7.25-7.25-7.25h-21.5C9.25 6 6 9.25 6 13.25v21.5c0 4 3.25 7.25 7.25 7.25h9.5a1.25 1.25 0 100-2.5h-9.5a4.75 4.75 0 01-4.75-4.75v-21.5a4.75 4.75 0 014.75-4.75h21.5a4.75 4.75 0 014.75 4.75v9.5c0 .69.56 1.25 1.25 1.25z" fill={primaryFill} /><path d="M19.25 18c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 102.5 0V22.27l15.37 15.36a1.25 1.25 0 101.76-1.76L22.27 20.5h10.48a1.25 1.25 0 100-2.5h-13.5z" fill={primaryFill} /></svg>;
};

export default OpenFolder48Regular;