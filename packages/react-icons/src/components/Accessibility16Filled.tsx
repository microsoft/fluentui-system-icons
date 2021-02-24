import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Accessibility16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a2 2 0 100 4 2 2 0 000-4zm6 3.14c-.3-.68-1.08-1-1.78-.74l-.9.33a.5.5 0 00-.3.3 3.2 3.2 0 01-6.05 0 .5.5 0 00-.3-.3l-.87-.32A1.4 1.4 0 002.74 6l2.26 1v2.9l-1.21 3.21a1.3 1.3 0 002.4.98l1.52-3.45c.1-.23.43-.23.53 0l1.44 3.44a1.35 1.35 0 002.5-1L11 9.91v-2.9l2.28-.98A1.42 1.42 0 0014 4.14z" fill={primaryFill} /></svg>;
};

export default Accessibility16Filled;