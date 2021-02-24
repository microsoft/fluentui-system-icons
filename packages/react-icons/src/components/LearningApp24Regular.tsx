import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LearningApp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h7.31a6.52 6.52 0 01-1.08-1.5H5.5a1 1 0 01-1-1h6.81a6.48 6.48 0 01-.3-1.5H4.5V4.5a1 1 0 011-1H17a1 1 0 011 1v6.52c.52.04 1.02.14 1.5.3V4.5A2.5 2.5 0 0017 2H5.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6.09-2.4l2.81 1.84a.6.6 0 01.28.52c0 .1-.02.2-.07.3a.57.57 0 01-.2.22l-2.8 1.92a.64.64 0 01-.17.07.55.55 0 01-.4-.02.69.69 0 01-.18-.13.61.61 0 01-.18-.44v-3.76a.62.62 0 01.37-.57.55.55 0 01.55.05z" fill={primaryFill} /><path d="M6 6a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6zm1.5 1.5h7v-1h-7v1z" fill={primaryFill} /></svg>;
};

export default LearningApp24Regular;