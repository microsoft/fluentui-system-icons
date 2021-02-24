import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InprivateAccount24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14c1.21 0 2.2.95 2.25 2.15v.1h-8v-.75H6.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.76 9.26 20.5 12 20.5v-.75h6.64C17.08 21.25 14.85 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5zm1.72 4.75H12v-1.5h7.98a3.75 3.75 0 01-.51 1.5zM12 2a5 5 0 014 2h-4v-.5a3.5 3.5 0 100 7V10h4a5 5 0 11-4-8zm4.98 5.5a4.96 4.96 0 01-.4 1.5H12V7.5h4.98zm-.4-2.5c.2.47.34.97.4 1.5H12V5h4.58z" fill={primaryFill} /></svg>;
};

export default InprivateAccount24Regular;