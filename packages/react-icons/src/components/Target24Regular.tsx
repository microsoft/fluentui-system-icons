import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Target24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0zm6-4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-8.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill={primaryFill} /></svg>;
};

export default Target24Regular;