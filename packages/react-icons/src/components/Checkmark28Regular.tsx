import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.03 13.47a.75.75 0 00-1.06 1.06l7 7c.3.3.77.3 1.06 0l14-14a.75.75 0 00-1.06-1.06L10.5 19.94l-6.47-6.47z" fill={primaryFill} /></svg>;
};

export default Checkmark28Regular;