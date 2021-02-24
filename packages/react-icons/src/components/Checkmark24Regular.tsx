import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.53 12.97a.75.75 0 00-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 00-1.06-1.06L8.5 16.94l-3.97-3.97z" fill={primaryFill} /></svg>;
};

export default Checkmark24Regular;