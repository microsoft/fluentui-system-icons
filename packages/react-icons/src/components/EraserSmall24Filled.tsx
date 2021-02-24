import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EraserSmall24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.65 2.64a2.25 2.25 0 013.2.02l4.9 5c.86.89.86 2.3 0 3.17l-2.26 2.28a4.51 4.51 0 00-5.37 5.42l-1.79 1.8c-.87.89-2.29.9-3.17.03l-5.1-5.01c-.9-.88-.9-2.32 0-3.2l9.6-9.51zM4.11 13.2c-.3.3-.3.78 0 1.07l5.1 5c.3.3.77.3 1.06 0l1.47-1.48-6.1-6.1L4.1 13.2z" fill={primaryFill} /><path d="M17.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill={primaryFill} /></svg>;
};

export default EraserSmall24Filled;