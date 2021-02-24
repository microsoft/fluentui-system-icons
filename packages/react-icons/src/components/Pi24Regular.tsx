import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pi24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 6.75A2.75 2.75 0 015.25 4h15a.75.75 0 010 1.5H17v11.45c0 1.21 1.2 2.06 2.34 1.65l.16-.06a.75.75 0 01.5 1.42l-.16.05a3.25 3.25 0 01-4.34-3.06V5.5h-6a56.9 56.9 0 01-.25 4.53c-.25 2.87-.76 6.5-1.8 9.47a.75.75 0 01-1.4-.5 40.07 40.07 0 001.7-9.1A67.9 67.9 0 008 5.5H5.25C4.56 5.5 4 6.06 4 6.75v.5a.75.75 0 01-1.5 0v-.5z" fill={primaryFill} /></svg>;
};

export default Pi24Regular;