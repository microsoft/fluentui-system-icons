import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Attach20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 10.49l5.66-5.66a3 3 0 114.24 4.24L8 15.8a1.5 1.5 0 11-2.12-2.12l6.01-6.01a.5.5 0 10-.7-.71l-6.02 6.01a2.5 2.5 0 103.54 3.54l6.72-6.72a4 4 0 10-5.66-5.66L4.12 9.78a.5.5 0 10.7.7z" fill={primaryFill} /></svg>;
};

export default Attach20Regular;