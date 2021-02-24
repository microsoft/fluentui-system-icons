import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8.75a.75.75 0 00-1.37-.42l-.19.28c-.5.75-1.05 1.58-2.58 2.5a.75.75 0 10.78 1.28c.81-.49 1.4-.97 1.86-1.43v8.29a.75.75 0 101.5 0V8.75zm3.78 5.47a.75.75 0 10-1.06 1.06L15.94 17l-1.72 1.72a.75.75 0 001.06 1.06L17 18.06l1.72 1.72a.75.75 0 101.06-1.06L18.06 17l1.72-1.72a.75.75 0 00-1.06-1.06L17 15.94l-1.72-1.72z" fill={primaryFill} /></svg>;
};

export default Multiplier1X28Regular;